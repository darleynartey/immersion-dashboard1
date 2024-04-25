import React from "react";
import img1 from "../../../assets/images/vehicleIcon.svg";
import img2 from "../../../assets/images/RegistrationIcon.svg";
import img3 from "../../../assets/images/cancelIcon.svg";
import img4 from "../../../assets/images/taxiIcon.svg";
import img5 from "../../../assets/images/upArrowIcon.svg";
import img6 from "../../../assets/images/arrowDownIcon.svg";

const Intro = () => {
    const stats = [
        { count: 300, label: "Total Rides", src: img1, arrow: img5, value: "4%(30day)"},
        { count: 500, label: "Total Registrations", src: img2, arrow: img5, value: "4%(30day)"},
        { count: 65, label: "Total Canceled Rides", src:img3, arrow: img6, value: "25%(30day)"},
        { count: 128, label: "Trips in Process", src: img4, arrow: img6, value: "12%(30day)" },
        ];
        const cardBase =
  "bg-white dark:bg-zinc-700 p-4 rounded-lg shadow flex items-center h-[172px] w-[300.24px] "

  return (
    <div className="flex flex-col items-baseline my-8 gap-y-4">
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col gap-y-3 w-full md:w-auto">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Hi, Samantha. Welcome to Yooke Admin!</p>
        </div>
           
        {/* Filter period goes here */}
      </div>
      
      {/* Stats card will go here */}
     <div className="flex flex-wrap gap-2">
       {stats.map((stat) => (
        <div key={stat.label} className={cardBase + "mb-4 md:mb-0"}>
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
    </div>
    </div>
  );
};

export default Intro;
