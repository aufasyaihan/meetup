import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../lib/data";

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/**
 * Fetches the static props for the index page.
 * @returns {Promise<{props: {meetups: any[]}, revalidate: number}>} The static props object containing the meetups and revalidate value.
 */
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
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
