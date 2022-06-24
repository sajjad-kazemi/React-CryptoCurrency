import {useCallback, useEffect, useState} from 'react'

import axios from 'axios'

const url = (page=1) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
function useFetch(page) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = useCallback(()=>{
    axios(url(page))
      .then(resp =>{
        setData(resp.data)
        setLoading(false)
      }).catch(err => console.error(err))
  },[page]);
  useEffect(() => {
    getData();
  }, [getData]);
  return {loading , data}
}

export default useFetch