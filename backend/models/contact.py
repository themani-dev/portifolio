from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=1000)

class Contact(BaseModel):
    name: str
    email: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "unread"

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None