import React, { useContext } from 'react'
import { MainContext } from '../../../context';

function Index() {
  const { symbols, setSymbols } = useContext(MainContext)

  return (
    <div></div>
  )
}

export default Index
