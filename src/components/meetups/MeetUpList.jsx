import MeetUpItem from "./MeetUpItem";
import classes from "./MeetUpList.module.css";

function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
            <MeetUpItem
              key={meetup.id}
              id={meetup.id}
              title={meetup.title}
              image={meetup.image}
              address={meetup.address}
              description={meetup.description}/>
        );
      })}
    </ul>
  );
}

export default MeetUpList;
