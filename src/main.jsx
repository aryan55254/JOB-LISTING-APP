import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Jobscard from './components/Jobscard.jsx';
import Footer from './components/Footer.jsx';
import Alljobs from './Alljobs.jsx';
import JobForm from './JobForm.jsx';
import Start from './Start.jsx';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Start />  
        },
        {
          path: '/alljobs',
          element: <Alljobs />
        },
        {
          path: '/addjobs',
          element: <JobForm />
        }
      ]
    }
  ]
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <>
   <RouterProvider router = {router}/>
   </>
    
  </StrictMode>,
)
