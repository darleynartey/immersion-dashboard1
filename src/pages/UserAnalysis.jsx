import React from "react";
import usergraph1 from "../assets/images/usergraph1.png";
import usergraph2 from "../assets/images/usergraph2.png";
import usergraph3 from "../assets/images/usergraph3.png";

const UserAnalysis = () => {
  return (
    <div className="bg-zinc-100">
      <div className="p-2 w-full">
        <h2 className="text-lg font-semibold mb-2">User Demographics</h2>
        <img src={usergraph1} alt="Age Demographics" className="mb-2 w-full" />
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Driver vs Rider Ratio</h2>
        <img
          src={usergraph2}
          alt="Driver vs Rider Ratio"
          className="mb-2 h-full"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Driver vs Rider Ratio</h2>
        <img
          src={usergraph3}
          alt="Driver vs Rider Ratio"
          className="h-full p-2"
        />
      </div>
    </div>
  );
};

export default UserAnalysis;
