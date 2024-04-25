import React from 'react'
import vehicleicon from '../assets/images/vehicleIcon.svg'
import repairsvg from '../assets/images/taxiIcon.svg'
import map from '../assets/images/map.png'

export const Operational = () => {
  return (
    <div className="p-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
                    <img src={vehicleicon} alt="Car Icon" className="bg-zinc-300 rounded-full p-2" />
                    <div>
                        <div className="text-lg font-semibold">20</div>
                        <div className="text-sm text-zinc-500">Available Cars</div>
                        {/* <div className="text-sm text-zinc-500"Average ride length </div> */}
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
                    <img src={repairsvg} alt="Clock Icon" className="bg-zinc-300 rounded-full p-2" />
                    <div>
                        <div className="text-lg font-semibold">2</div>
                        <div className="text-sm text-zinc-500">Support Request</div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
                    <img src={vehicleicon} alt="Clock Icon" className="bg-zinc-300 rounded-full p-2" />
                    <div>
                        <div className="text-lg font-semibold">20min</div>
                        <div className="text-sm text-zinc-500">Average driver wait time</div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 mt-10">
                <h2 className="font-bold text-lg">Distribution of Cars</h2>
                <img src={map} alt="Peak Hours Graph" className="w-full h-96 p-2" />
            </div>
        </div>
  )
}
