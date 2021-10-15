import { NextApiRequest, NextApiResponse } from "next";

type data = {
  response: {
    message?: string;
    error?: string;
  };
};

type reqBody = {
  email: string;
  name: string;
  message: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<data>) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body as reqBody;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        response: {
          error: "Invalid Data",
        },
      });
      return;
    } else {
      const newMessage = {
        email,
        name,
        message,
      };
      res.status(201).json({
        response: {
          message: "Message stored successfully!",
        },
      });
    }
  }
};

export default handler;
