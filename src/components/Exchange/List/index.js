import React, { useContext } from 'react'
import { MainContext } from '../../../context';

function Index() {
  const { symbols } = useContext(MainContext)

  return (
    <div>
      {/* {
        symbols.map((symbol, i) => (
          <div key={i}>
            {symbol.symbol} = {symbol.currency}
          </div>
        ))
      } */}
    </div>
  )
}

export default Index
