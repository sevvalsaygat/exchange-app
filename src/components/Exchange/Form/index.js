import React, { useContext } from 'react'
import { MainContext } from '../../../context';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Index() {
  const { symbols, exchanges, setExchanges } = useContext(MainContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    let config = {
      headers: {
        apikey: "GKwKr2mvEJKblSQNVaP3VqIlaYpsPiml",
      }
    }

    axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${data.to}&from=${data.from}&amount=${data.amount}`, config)
      .then((res) => {
        const exchange = { from: data.from, to: data.to, amount: data.amount, result: res.data.result }
        setExchanges([...exchanges, exchange])
      }).finally(() => {
        reset()
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("to", { required: true })}>
        {
          symbols.map((symbol, i) => (
            <option value={symbol.symbol} key={i}>
              {symbol.currency}
            </option>
          ))
        }
      </select>
      <select {...register("from", { required: true })}>
        {
          symbols.map((symbol, i) => (
            <option value={symbol.symbol} key={i}>
              {symbol.currency}
            </option>
          ))
        }
      </select>
      <input type='number'
        {...register("amount", { required: true, })}>
      </input>
      <button type="submit">Create</button>
    </form>
  )
}

export default Index
