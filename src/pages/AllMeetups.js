import { useState, useEffect } from 'react';
import MeetUpList from '../components/meetups/MeetUpList';


function AllMeetupsPage () {
  const [isLoading, switchLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const url = 'https://react-course-741ec-default-rtdb.firebaseio.com/meetups.json';

  useEffect(() => {
    switchLoading(true)
      fetch (url)
    .then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }

        meetups.push(meetup);
      }

      switchLoading(false);
      setLoadedMeetups(meetups)
    });
  }, []);


    if (isLoading) {
      return (
        <section>
          <p>Loading ....</p>
        </section>
      )
    }
    console.log(loadedMeetups)
    return <section>
        <h1>All Meetups</h1>
        <MeetUpList meetups={loadedMeetups}/>
    </section>;
}

export default AllMeetupsPage;