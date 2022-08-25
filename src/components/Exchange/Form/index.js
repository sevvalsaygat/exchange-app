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
    <form className="mt-40 max-w-xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800"
      onSubmit={handleSubmit(onSubmit)}>
      <select className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
        {...register("to", { required: true })}>
        <option value="">To</option>
        {
          symbols.map((symbol, i) => (
            <option value={symbol.symbol} key={i}>
              {symbol.currency}
            </option>
          ))
        }
      </select>
      <select className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
        {...register("from", { required: true })}>
        <option value="">From</option>
        {
          symbols.map((symbol, i) => (
            <option value={symbol.symbol} key={i}>
              {symbol.currency}
            </option>
          ))
        }
      </select>
      <input className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
        placeholder='Amount'
        {...register("amount", {
          required: true,
          valueAsNumber: true,
          validate: (value) => value > 0,
          pattern: {
            value: /^(0|[1-9]\d*)(\.\d+)?$/
          },
        })}>
      </input>
      <button className='mt-5 float-right bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 border border-gray-700 rounded'
        type="submit">Create</button>
    </form>
  )
}

export default Index
