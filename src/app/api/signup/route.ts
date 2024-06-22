// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/app/lib/connectDB';
import { hash } from 'bcryptjs';
import { User as UserSchema } from '@/models/User';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, password } = req.body;

  try {
    await dbConnect();
    let user = await UserSchema.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hash(password, 10);

    await UserSchema.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
