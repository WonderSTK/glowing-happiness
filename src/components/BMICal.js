import React from 'react'

const BMICal = () => {
    
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Height (cm)</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (kg)</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Calculate
            </button>
        </div>
    </div>
  )
}

export default BMICal