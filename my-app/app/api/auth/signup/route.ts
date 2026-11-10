// NextResponse allows us to send HTTP responses from our API route
import { NextResponse } from "next/server";
// bcrypt allows us to hash passwords before storing them
import bcrypt from "bcryptjs";
// randomUUID generates a unique ID for every registered user.
import { randomUUID } from "crypto";
// Import the functions from the library that read and write user information from your users.json file.
import { getUsers, saveUsers } from "../../../../lib/users";


// POST is the HTTP method used when someone submits the signup form.
export async function POST(request: Request) {
  try {
    // Convert the incoming request body from JSON into a JavaScript object.
    const body = await request.json();

    // Extract the individual values from the request body.
    const {
      firstName,
      lastName,
      email,
      phone,
      password
    } = body;

    // Check whether the user has provided all required information.
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      typeof password !== "string" ||
      // Password must contain at least 8 characters.
      password.length < 8 ||
      // Password cannot exceed 72 characters for bcrypt.
      password.length > 72
    ) {
      // If any validation fails, send an HTTP 400 response which means it contains invalid information.
      return NextResponse.json(
        { message: "Please provide valid registration information. Passwords must be 8–72 characters." },
        { status: 400 }
      );
    }

    // Read all currently registered users from users.json.
    // getUsers() returns an array of user objects.
    const users = await getUsers();

    // Remove whitespace from the beginning and end of the email and convert the email to lowercase.
    // This prevents emails like TEST@gmail.com and test@gmail.com from being registered as two different emails
    const normalizedEmail = email.trim().toLowerCase();

    // Search through the users array to see whether someone has already registered with this email.
    const existingUser = users.find(
      user => user.email === normalizedEmail
    );
    // If an existing user is found, stop registration.
    if (existingUser) {
      return NextResponse.json(
        { message: "This email is already registered." },
        { status: 409 }
      );
    }
    // Hash the user's password using bcrypt.
    // The number 12 represents the cost factor
    const passwordHash = await bcrypt.hash(password, 12);

    // Create a new object containing the user's information.
    const newUser = {
      id: randomUUID(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      passwordHash
    };

    // Add the new user object to the existing users array.
    users.push(newUser);

    // Write the updated users array back into users.json.
    await saveUsers(users);

    // Send a successful response to the frontend.
    return NextResponse.json({
      success: true,
      message: "Account created successfully!",
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email
      }
    }, { status: 201 });

  } catch (error) {
    console.error("Signup error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}




