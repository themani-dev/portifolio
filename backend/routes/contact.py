from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from models.contact import ContactCreate, Contact, ContactResponse
import os
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'portfolio_db')]

@router.post("/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
async def create_contact(contact_data: ContactCreate):
    try:
        # Create contact document
        contact = Contact(**contact_data.dict())
        contact_dict = contact.dict()
        
        # Insert into MongoDB
        result = await db.contacts.insert_one(contact_dict)
        
        logger.info(f"Contact form submitted by {contact_data.email}")
        
        return ContactResponse(
            success=True,
            message="Message sent successfully! I'll get back to you soon.",
            id=str(result.inserted_id)
        )
    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit contact form. Please try again."
        )