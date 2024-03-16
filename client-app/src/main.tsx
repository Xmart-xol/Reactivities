
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './App/Layout/styles.css'
import { StoreContext, store } from './App/stores/store'
import {RouterProvider} from "react-router-dom";
import { router } from './App/router/Routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreContext.Provider value={store}>
       <RouterProvider router={router} />
    </StoreContext.Provider>
  
)
