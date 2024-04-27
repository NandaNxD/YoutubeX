import React from 'react'

const Shimmer
 = () => {
  return (
        <div className="border border-gray-300 shadow rounded-lg p-2 w-full sm:w-64 md:w-72 lg:w-72">
            <div className="rounded-lg bg-slate-300 h-40 w-full mb-2 animate-pulse">

            </div>
            <div className="animate-pulse">
                <div className="flex flex-col  gap-2 py-1">

                    <div className="h-2 bg-slate-300 rounded">

                    </div>
                    <div className="h-2 bg-slate-300 rounded">

                    </div>

                    <div className="h-2 bg-slate-300 rounded w-1/2">
                        
                    </div>

                    <div className="h-2 bg-slate-300 rounded w-1/2">
                        
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Shimmer
