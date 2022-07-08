import { useNavigate } from 'react-router-dom'
import NewMeetUpForm from '../components/meetups/NewMeetUpForm';

function NewMeetupsPage () {
    const navigate = useNavigate();

    function addMeetUpHandler(meetupData) {
        const url = 'https://react-course-741ec-default-rtdb.firebaseio.com/meetups.json'
        fetch(url, {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                navigate('/', {replace: true})
            });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetUpForm onAddMeetUp={addMeetUpHandler}/>
    </section>;
}

export default NewMeetupsPage;