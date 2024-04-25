import React from "react";


import img1 from "../assets/images/vehicleIcon.svg";
import img2 from "../assets/images/RegistrationIcon.svg";
import img3 from "../assets/images/cancelIcon.svg";
import img4 from "../assets/images/taxiIcon.svg";
import img5 from "../assets/images/upArrowIcon.svg";
import img6 from "../assets/images/arrowDownIcon.svg";
import img7 from "../assets/images/calendar.svg"
import Barchart from "../pages/landing/components/Graphs/Barchart";
import Doughnutchart from "../pages/landing/components/Graphs/Doughnutchart";
import Linechart from "../pages/landing/components/Graphs/Linechart";
import LegendLine from "../pages/landing/components/Graphs/Legendline";




// Constants for repeated class strings
const buttonBase =
  "p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600";
const cardBase =
  "bg-white dark:bg-zinc-700 p-4 rounded-lg shadow flex items-center h-[172px] w-[300.24px] ";

// Main App Component
function App() {
  return (
    <div className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white">
      <div className="container mx-auto px-4 py-6">
        {/* <Header /> */}
       <div className="flex justify-between">
        <Dashboard />
       <Footer />
        <StatsCards />
       </div>
       
      </div>
    </div>
  );
}


// Icon Buttons Component
function IconButtons() {
  const icons = ["Notification", "Settings", "User"];
  return (
    <>
      {icons.map((icon) => (
        <button key={icon} className={buttonBase}>
          <img src={`https://placehold.co/24x24`} alt={`${icon} Icon`} />
        </button>
      ))}
    </>
  );
}



// Dashboard Component
function Dashboard() {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Hi, Samantha. Welcome to Yooke Admin!</p>
    </div>
  );
}

// Stats Cards Component
function StatsCards() {
  const stats = [
    { count: 300, label: "Total Rides", src: img1, arrow: img5, value: "4%(30day)"},
    { count: 500, label: "Total Registrations", src: img2, arrow: img5, value: "4%(30day)"},
    { count: 65, label: "Total Canceled Rides", src:img3, arrow: img6, value: "25%(30day)"},
    { count: 128, label: "Trips in Process", src: img4, arrow: img6, value: "12%(30day)" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div key={stat.label} className={cardBase}>
          <img
            src={`${stat.src}`}
            alt={`${stat.label} Icon`}
            className="mr-4"
          />
          <div>
            <p className="text-lg font-semibold">{stat.count}</p>
            <p>{stat.label}</p>
            <span className="flex"><img src={`${stat.arrow}`} alt="" />{stat.value}</span>
          </div>
        </div>
      ))}
      <div>
      <Doughnutchart/>
      <Linechart/>
      <LegendLine/>
      {/* <Map/> */}
      </div>

    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div className="flex justify-between items-center shadow mb-4 p-2">
       <img
            src={img7}
            alt={""} 
            className="mr-4"
          />
     <div className="flex flex-col"> <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-600">
        Filter Period
      </button>
      <span>Filter results: Jan 2021 - Dec 2021</span></div>
    </div>
  );
}

export default App;
