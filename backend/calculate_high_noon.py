from fastapi import fastapi
from pydantic import BaseModel
import requests

app = FastAPI()

class Location(BaseModel):
    city: str
    country: str
@app.post("/calculate_high_noon")
def calculate_high_noon(location: Location):
    fake_time = "12:04 PM"
    return {"city":location.city,  "country": location.country, "high_noon": fake_time}