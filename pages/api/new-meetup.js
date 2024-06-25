import { MongoClient } from "mongodb";

export default async function postNewMeetupHandler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:excelsior%21@learn-nextjs.udjuyoj.mongodb.net/?retryWrites=true&w=majority&appName=learn-nextjs"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup added", meetup: result });
  }
}
