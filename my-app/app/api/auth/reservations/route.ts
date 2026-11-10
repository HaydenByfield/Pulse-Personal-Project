import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import {
  getReservations,
  saveReservations
} from "../../../../lib/reservations";



export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      date,
      time,
      guests,
      firstname,
      lastname,
      phone,
      email,

    } = body;

    // Check required information
    if (
      typeof date !== "string" ||
      typeof time !== "string" ||
      typeof firstname !== "string" ||
      typeof lastname !== "string" ||
      typeof phone !== "string" ||
      typeof email !== "string" ||
      !firstname.trim() ||
      !date.trim() ||
      !time.trim() ||
      !lastname.trim() ||
      !phone.trim() ||
      !email.trim()


    ) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validate number of guests


    // Validate date format and ensure it is not in the past
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      !Number.isFinite(Date.parse(`${date}T00:00:00Z`)) ||
      new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date ||
      date < new Date().toISOString().slice(0, 10)
    ) {
      return NextResponse.json(
        { message: "Please select a valid future date." },
        { status: 400 }
      );
    }

    // Validate time
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) {
      return NextResponse.json(
        { message: "Please select a valid reservation time." },
        { status: 400 }
      );
    }


    // Retrieve existing reservations
    const reservations = await getReservations();

    // Create reservation
    const newReservation = {
      id: randomUUID(),
      date,
      time,
      guests,
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      createdAt: new Date().toISOString()
    };

    // Add reservation to JSON
    reservations.push(newReservation);

    await saveReservations(reservations);

    return NextResponse.json(
      {
        success: true,
        message: "Your reservation request has been received!",
        reservation: {
          id: newReservation.id,
          date: newReservation.date,
          time: newReservation.time,
          guests: newReservation.guests,
        }
      },

      { status: 201 }
    );


  } catch (error) {
    console.error("Reservation error:", error);

    return NextResponse.json(
      { message: "Unable to process your reservation. Please try again." },
      { status: 500 }
    );
  }
}