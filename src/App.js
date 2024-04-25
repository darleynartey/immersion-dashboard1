import './App.css';
import Dashboard from './components/Dashboard.jsx'


import { RouterProvider, createBrowserRouter } from "react-router-dom";

//import { Sidebar } from 'antd';

import RideData from "./pages/RideData";
import { Operational } from "./pages/Operational";
import UserAnalysis from "./pages/UserAnalysis";
import CoreMetrics from "./pages/metrics/CoreMetrics";
import LandingPage from "./pages/landing/LandingPage";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {index: true, element: <LandingPage/>},
      { path: "dashboard", element: <Dashboard /> },
      { path: "ridedata", element: <RideData /> },
      { path: "operational", element: <Operational /> },
      { path: "useranalysis", element: <UserAnalysis /> },
      { path: "coremetrics", element: <CoreMetrics /> },
    ],
  },
  {
    
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};


export default App;
