import React, { useContext } from 'react'
import { MainContext } from '../../../context';

function Index() {
  const { exchanges } = useContext(MainContext)

  return (
    <div className="mt-20 shadow-md max-w-5xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-sans bg-gray-100 dark:bg-gray-100 rounded-l-lg"
            >To</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-sans bg-gray-100 dark:bg-gray-100"
            >From</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-sans bg-gray-100 dark:bg-gray-100"
            >Amount</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-sans bg-gray-100 dark:bg-gray-100 rounded-r-lg"
            >Result</th>
          </tr>
        </tbody>
        <tbody>
          {
            exchanges.map((exchange, i) => (
              <tr key={i}>
                <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap font-sans'
                >{exchange.to}</td>
                <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap font-sans'
                >{exchange.from}</td>
                <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap font-sans'
                >{exchange.amount}</td>
                <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap font-sans'
                >{exchange.result}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Index
