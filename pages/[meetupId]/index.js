import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { DUMMY_MEETUPS } from "../../lib/data";

export default function MeetupDetailPage() {
  const router = useRouter();
  const meetupId = router.query.meetupId;
  const selectedMeetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);
  console.log(selectedMeetup);
  return (
    <>
      <MeetupDetail title={selectedMeetup.title} image={selectedMeetup.image} address={selectedMeetup.address} description={selectedMeetup.description}/>
    </>
  );
}
