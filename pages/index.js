import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../lib/data";

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
