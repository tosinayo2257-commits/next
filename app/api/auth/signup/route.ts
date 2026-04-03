import { connectDB } from "@/lib/db";
import Users from "@/models/users";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    await connectDB();

    // check if user exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
    });

    return new Response(JSON.stringify({ message: "User created", user }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Signup error" }), {
      status: 500,
    });
  }
}
