import React, { useContext } from 'react'
import { MainContext } from '../../../context';

function Index() {
  const { exchanges } = useContext(MainContext)

  return (
    <div className="mt-20 overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr>
            <th>To</th>
            <th>From</th>
            <th>Amount</th>
            <th>Result</th>
          </tr>
        </tbody>
        <tbody>
          {
            exchanges.map((exchange, i) => (
              <tr key={i}>
                <td>{exchange.to}</td>
                <td>{exchange.from}</td>
                <td>{exchange.amount}</td>
                <td>{exchange.result}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Index
