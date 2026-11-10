import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUsers } from "../../../../lib/users";



export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return NextResponse.json(
        { message: "Please enter your email and password." },
        { status: 400 }
      );
    }

    const users = await getUsers();

    const user = users.find(
      user => user.email === email.trim().toLowerCase()
    );

    if (!user) {
      return NextResponse.json(
        { message: "Email or password is incorrect." },
        { status: 401 }
      );
    }

    const passwordMatches = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!passwordMatches) {
      return NextResponse.json(
        { message: "Email or password is incorrect." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login successful!",
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}