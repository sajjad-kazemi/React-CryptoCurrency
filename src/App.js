import './App.css'

import {useEffect, useState} from 'react'

import CoinList from './components/CoinList/CoinList'
import PageBtn from './components/PageBtn/PageBtn'
import useFetch from './hooks/useFetch'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const {loading,data} = useFetch(page)
  useEffect(() => {
  setCoins(data)
  },[data]);
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })  
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Crypto Currency</h1>
        <h2>Page : {loading?'loading...':page}</h2>
        <form onSubmit={(e)=> e.preventDefault()}>

          <PageBtn id={'prev'} setPage={setPage} currentPage={page} pageChange={-1}/>
          <input type="text" onChange={handleSearch} className="coin-input" placeholder='Search' value={search}/>

          <PageBtn id={'next'} setPage={setPage} currentPage={page} pageChange={1}/>

        </form>
      </div>
      <CoinList coins={filteredCoins}/>
    </div>
  )
}

export default App
