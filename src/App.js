import { useEffect, useState } from 'react';
import  './App.css';
import DisplayCryptoTable from './components/DisplayCryptoTable';
import InputSearch from './components/InputSearch';
// import data from './data/crypto';
import axios from 'axios';
function App() {
  // console.log(data)
  const [coins,setCoins] = useState([])
  // const [search,setSearch] = useState('')
  // useEffect(() => {
  //   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  //   .then(res=>{
  //      setCoins(res.data)
  //      console.log(res.data)
  //   }).catch(error=>console.log(error))
  // }, [])
  // const handleChange = e =>{
  //   setSearch(e.target.value)
  // }
  // const filteredCoins = coins.filter(coin=>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  //   )

useEffect(()=>{
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then((res)=>{
    console.log("response from api ==>", res)
setCoins(res?.data)
  })
}, [])
  return (
    <div className='main'>
      
      <InputSearch />

      <DisplayCryptoTable 
      data={coins}
       />
    </div>
  );
}

export default App;
