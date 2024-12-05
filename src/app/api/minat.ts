import { NextApiRequest, NextApiResponse } from "next";

const interests = [
  {
    id: 1,
    name: [
      "UI/UX",
      "Data Analyst",
      "Software Engineering",
      "Digital Marketing",
      "Cybersecurity",
      "Product Management",
      "Cloud Computing",
    ],
  },
  {
    id: 2,
    name: [
      "UI/UX",
      "Data Analyst",
      "Software Engineering",
      "Digital Marketing",
      "Cybersecurity",
      "Product Management",
      "Cloud Computing",
    ],
  },
  {
    id: 3,
    name: [
      "UI/UX",
      "Data Analyst",
      "Software Engineering",
      "Digital Marketing",
      "Cybersecurity",
      "Product Management",
      "Cloud Computing",
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(interests);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
