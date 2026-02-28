from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional, Dict

class CommandAnalytics(BaseModel):
    command: str = Field(..., min_length=1)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    session_id: Optional[str] = None

class AnalyticsSummary(BaseModel):
    total_commands: int
    command_breakdown: Dict[str, int]