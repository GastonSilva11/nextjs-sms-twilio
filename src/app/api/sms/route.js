import { NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

console.log(accountSid, authToken);

const client = twilio(accountSid, authToken);

export async function POST(request) {
  try {
    const data = await request.json();

    const message = await client.messages.create({
      body: data.message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: data.phone,
    });

    return NextResponse.json({ message: "message sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 404 }
    );
  }
}
