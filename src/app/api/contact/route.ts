import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, date, timeSlot, notes } = body;

    if (!fullName || (!email && !phone)) {
      return NextResponse.json(
        { error: "Name and at least email or phone number are required." },
        { status: 400 }
      );
    }

    // Optional server-side forward to BooClient CRM if credentials are set
    const crmApiUrl = process.env.CRM_API_URL;
    const crmKey = process.env.CRM_KEY;

    if (crmApiUrl && crmKey) {
      try {
        await fetch(crmApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-crm-key": crmKey,
          },
          body: JSON.stringify({
            name: fullName,
            email,
            phone,
            custom_fields: {
              date,
              timeSlot,
              notes,
              source: "Dt. Bhavna Landing Page",
            },
          }),
        });
      } catch (crmErr) {
        console.error("CRM Forward Error:", crmErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Consultation request received successfully.",
    });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
