// pages/api/save-signup.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxh9K9zKojF9VvqAGmaYG6EZ6pwf2B3x3V9TiN_6wIbt8cEidv3OJbP55WMi9nJPbKE/exec";

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);

    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const text = await response.text();

    if (response.ok && text.toLowerCase().includes("success")) {
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(500).json({ message: "Google Script error", detail: text });
    }
  } catch (error: any) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}
