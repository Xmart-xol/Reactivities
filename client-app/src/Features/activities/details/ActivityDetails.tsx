import { Button, Card, Image } from 'semantic-ui-react'
import { useStore } from '../../../App/stores/store';
import LoadingComponent from '../../../App/Layout/LoadingComponent';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default observer(function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams();

  useEffect(() => {
    if(id) loadActivity(id)
  }, [id, loadActivity])

  if (loadingInitial || !activity) return <LoadingComponent/>;

  return (
    <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>
                {activity.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='2'>
            <Button as={Link} to={`/manage/${activity.id}`} basic color='blue' content='edit'/>
            <Button as={Link} to='/activities' basic color='blue' content='edit'/>
            <Button  basic color='grey' content='cancel'/>
          </Button.Group>
        </Card.Content>
    </Card>
  )
})
