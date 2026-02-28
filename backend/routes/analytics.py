from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from models.analytics import CommandAnalytics, AnalyticsSummary
import os
import logging
from typing import List

logger = logging.getLogger(__name__)
router = APIRouter()

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'portfolio_db')]

@router.post("/analytics/command", status_code=status.HTTP_201_CREATED)
async def track_command(analytics: CommandAnalytics):
    try:
        # Insert analytics data
        analytics_dict = analytics.dict()
        await db.command_analytics.insert_one(analytics_dict)
        
        return {"success": True}
    except Exception as e:
        logger.error(f"Error tracking command: {str(e)}")
        # Don't fail the request if analytics fails
        return {"success": False}

@router.get("/analytics/summary", response_model=AnalyticsSummary)
async def get_analytics_summary():
    try:
        # Get total count
        total_commands = await db.command_analytics.count_documents({})
        
        # Get command breakdown using aggregation
        pipeline = [
            {
                "$group": {
                    "_id": "$command",
                    "count": {"$sum": 1}
                }
            },
            {"$sort": {"count": -1}}
        ]
        
        results = await db.command_analytics.aggregate(pipeline).to_list(100)
        
        command_breakdown = {item["_id"]: item["count"] for item in results}
        
        return AnalyticsSummary(
            total_commands=total_commands,
            command_breakdown=command_breakdown
        )
    except Exception as e:
        logger.error(f"Error getting analytics summary: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to retrieve analytics"
        )