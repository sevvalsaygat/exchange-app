import React, { useContext } from 'react'
import { MainContext } from '../../../context';
import { useForm } from "react-hook-form";

function Index() {
  const { symbols, setSymbols } = useContext(MainContext)
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select>
        {
          symbols.map((symbol, i) => (
            <option key={i}>
              {symbol.symbol}
            </option>
          ))
        }
      </select>
      <select>
        {
          symbols.map((symbol, i) => (
            <option key={i}>
              {symbol.symbol}
            </option>
          ))
        }
      </select>
      <button type="submit">Create</button>
    </form>
  )
}

export default Index
