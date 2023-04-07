import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routes';
import './assets/css/style.css'
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
)
