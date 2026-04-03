import { connectDB } from "@/lib/db";
import Users from "@/models/users";
import bcrypt from "bcryptjs";
import { Jwt } from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const user = await Users.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid email" }), {
        status: 400,
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: "Invalid password" }), {
        status: 400,
      });
    }

    // create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    return new Response(
      JSON.stringify({ message: "Login successful", token }),
      { status: 200 },
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Login error" }), {
      status: 500,
    });
  }
}
