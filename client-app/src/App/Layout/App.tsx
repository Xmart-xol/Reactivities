import { useEffect, useState } from "react"
import { Container} from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import "./styles.css";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from 'uuid';
import agent from "../api/agents";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const {activityStore} = useStore();


  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setsubmitting] = useState(false);

  
  useEffect(() => {
    activityStore.loadActivityes()
      
  }, [activityStore])


  function handleCreateOrEditActivity(activity :Activity) {
    setsubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x => x.id !== activity.id), activity ])
        setSelectedActivity(activity);
        setEditMode(false);
        setsubmitting(false);
      })
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity])
        setSelectedActivity(activity);
        setEditMode(false);
        setsubmitting(false);
      })
    }
  }

  function handleDeleteActivity(id: string) {
    setsubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(c => c.id !== id)]);
      setsubmitting(false);
    })
    
  }

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

  return (
      <>
       <NavBar/>
       <Container style= {{marginTop: '7em'}}>
          <ActivityDashboard 
          activities ={activityStore.activities}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
          />
       </Container>
      </>
  );
}

export default observer(App);
