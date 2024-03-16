
import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import { useStore } from '../../../App/stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../App/Layout/LoadingComponent';


export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivityes, ActivityRegistry} = activityStore;

    useEffect(() => {
        if(ActivityRegistry.size <= 1) loadActivityes();
    }, [loadActivityes, ActivityRegistry.size])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return (
        <Grid>
            <Grid.Column width={'10'}>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
               <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
  )
})

