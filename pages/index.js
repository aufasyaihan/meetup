import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../lib/data";
import { MongoClient } from "mongodb";

export default function HomePage(props) {
  return <>
  <Head>
    <title>React Meetups</title>
    <meta name="description" content="Browse a list of highly active React meetups!" />
  </Head>
  <MeetupList meetups={props.meetups} />
  </>;
}

/**
 * Fetches the static props for the index page.
 * @returns {Promise<{props: {meetups: any[]}, revalidate: number}>} The static props object containing the meetups and revalidate value.
 */
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:excelsior%21@learn-nextjs.udjuyoj.mongodb.net/?retryWrites=true&w=majority&appName=learn-nextjs"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        }))
      },
      revalidate: 10, // revalidate every 10 seconds
    };
}
/**
 * Fetches data from the server and passes it as props to the component.
 * This function is executed on the server side.
 *
 * @param {Object} context - The context object containing the request and response objects.
 * @returns {Object} - An object containing the props to be passed to the component.
 */
// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
