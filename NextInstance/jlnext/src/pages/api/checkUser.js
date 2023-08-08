// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../libs/prisma";

export default async function handler(req, res) {
  const { uid } = req.body;

  if (!uid) {
    res.status(200).json({ msg: "Invalid UID", uid: uid });
  }

  let err;
  let username = null;
  const user = await prisma.user
    .findUnique({
      where: {
        uid: uid,
      },
    })
    .then((data) => {
      console.log(data);
      if (data.username) {
        username = data.username;
      }
    });

  res.status(200).json({ data: user, msg: "User Found", username: username });
}
