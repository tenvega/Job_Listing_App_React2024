
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import MainLayout from "./layouts/MainLayout" 
import JobsPage from "./Pages/JobsPage"
import NotFoundPage from "./Pages/NotFoundPage"
import JobPage, {jobLoader} from "./Pages/JobPage"
import AddJobPage from "./Pages/AddJobPage"




const App = () => {
   //Add NewJob
  const addJob = async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  });
  return;
}
//Delete Job

const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  });
}

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  <Route path='/jobs' element={<JobsPage/>}/>
  <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
  <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
  <Route path='*' element={<NotFoundPage/>}/>
  </Route>
  )
)

  return <RouterProvider router={router} />
    
}

export default App
