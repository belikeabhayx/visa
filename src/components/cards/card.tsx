import React from 'react'

interface CountryCardProps {
  country: string
  flagUrl: string
  visaOptions: string[]
}

const Card: React.FC<CountryCardProps> = ({ country, flagUrl, visaOptions }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out w-[300px] h-[400px]"
      style={{ overflow: 'hidden' }}
    >
      <div className="flex justify-center mb-4">
        <img src={flagUrl} alt={`${country} flag`} className="h-16 w-16 rounded-full" />
      </div>
      <h3 className="text-center text-lg font-bold mb-4">
        {country}
        <div className="h-1 w-10 bg-red-600 mx-auto mt-1"></div>
      </h3>
      <ul className="mb-6 space-y-2">
        {visaOptions.map((option, index) => (
          <li key={index} className="flex items-center">
            <span className="text-red-500 mr-2">✔</span>
            <span>{option}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          Check Eligibility
        </button>
      </div>
    </div>
  )
}

export default Card;
