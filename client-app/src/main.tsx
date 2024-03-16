import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/Layout/App'
import 'semantic-ui-css/semantic.min.css'
import './App/Layout/styles.css'
import { StoreContext, store } from './App/stores/store'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreContext.Provider value={store}>
       <App />
    </StoreContext.Provider>
  
)
