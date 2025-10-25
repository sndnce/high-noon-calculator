from fastapi import BackgroundTasks
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText

class DuelInvite(BaseModel):
    recipient_email: str
    date: str
    city: str

@app.post("/send_invite")
def send_invite(invite: DuelInvite, background_tasks: BackgroundTasks):
    body = f"""
    You've been challenged to a duel!
    Date: {invite.date}
    Location: {invite.city}
    """
    background_tasks.add_task(send_email, invite.recipient_email, body)
    return {"status": "Email scheduled"}

def send_email(to, body):
    msg = MIMEText(body)
    msg["Subject"] = "You've Been Invited to a Duel"
    msg["From"] = "highnoon@app.com"
    msg["To"] = to
    with smtplib.SMTP("smtp.gmail.com", 587) as s:
        s.starttls()
        s.login("hnoonbot@gmail.com", "itshighnoon")
        s.send_message(msg)



