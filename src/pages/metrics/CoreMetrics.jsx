import React from 'react'
import maleicon from '../../assets/images/maleicon.svg'
import taxiicon from '../../assets/images/taxiIcon.svg'
import LegendLine from '../landing/components/Graphs/Legendline'

const CoreMetrics = () => {
  return (
    <div className="p-8 ">
    <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
                    <img src={taxiicon} alt="Car Icon" className="bg-zinc-300 rounded-full p-2" />
                    <div>
                        <div className="text-lg font-semibold">128</div>
                        <div className="text-sm text-zinc-500">Registered drivers</div>
                        {/* <div className="text-sm text-zinc-500"Average ride length </div> */}
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
                    <img src={maleicon} alt="Clock Icon" className="bg-zinc-300 rounded-full p-2 h-14 w-14" />
                    <div>
                        <div className="text-lg font-semibold">1000</div>
                        <div className="text-sm text-zinc-500">Registered Riders</div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
                    <img src={maleicon} alt="Clock Icon" className="bg-zinc-300 rounded-full p-2 h-14 w-14" />
                    <div>
                        <div className="text-lg font-semibold">200</div>
                        <div className="text-sm text-zinc-500">Active Users</div>
                    </div>
                </div>
            </div>


        <div className="mx-auto p-4 bg-white shadow rounded-lg w-full">
            <h2 className="text-lg font-semibold mb-4">Trip Statistics</h2>
            <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-zinc-100 rounded">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 019 16h6a1 1 0 011 1v3zM9 8h.01M15 12h.01M9 16h6a1 1 0 011 1v3m0 0a1 1 0 002 0v-3a1 1 0 011-1h3a1 1 0 001-1V5a1 1 0 00-1-1h-4a1 1 0 01-1-1V1a1 1 0 00-1-1H6a1 1 0 00-1 1v2a1 1 0 01-1 1H1a1 1 0 00-1 1v9a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 002 0v-3a1 1 0 011-1h6zM9 4h6v4H9V4z"/>
                        </svg>
                        <span className="text-zinc-700">Total Rides</span>
                    </div>
                    <span className="text-zinc-900 font-semibold">304</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-100 rounded">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6a1 1 0 011-1h3m10 0a1 1 0 00-1-1h-4a1 1 0 01-1-1V1a1 1 0 00-1-1H6a1 1 0 00-1 1v3a1 1 0 01-1 1H1a1 1 0 00-1 1v11a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 002 0v-3a1 1 0 011-1h3a1 1 0 011-1v-3a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 002 0v-3a1 1 0 011-1h3a1 1 0 001-1V7a1 1 0 00-1-1h-3a1 1 0 01-1-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 01-1 1H9z"/>
                        </svg>
                        <span className="text-zinc-700">Rides in process</span>
                    </div>
                    <span className="text-zinc-900 font-semibold">45</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-100 rounded">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        <span className="text-zinc-700">Cancelled Rides</span>
                    </div>
                    <span className="text-zinc-900 font-semibold">10</span>
                </div>
            </div>
        </div>
        <div className='p-5'>
        <LegendLine/>
        </div>
    

    </div>
  )
}

export default CoreMetrics