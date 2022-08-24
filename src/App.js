import { useState, useEffect } from 'react';
import Home from './pages/Home';
import { MainContext } from './context'
import axios from 'axios';

function App() {
  const [exchanges, setExchanges] = useState([])
  const [symbols, setSymbols] = useState([])

  const data = {
    exchanges,
    setExchanges,
    symbols,
    setSymbols
  }

  useEffect(() => {
    let config = {
      headers: {
        apikey: "GKwKr2mvEJKblSQNVaP3VqIlaYpsPiml",
      }
    }
    axios.get('https://api.apilayer.com/exchangerates_data/symbols', config)
      .then((res) => {
        const result = Object.entries(res.data.symbols).map(symbol => {
          return {
            symbol: symbol[0], currency: symbol[1]
          }
        })
        setSymbols(result)
      })
  }, []);

  return (
    <MainContext.Provider value={data}>
      <Home />
    </MainContext.Provider>
  );
}

export default App;
