import axios from 'axios';

    

  const fetchData = (dispatch)=>{
    const API_KEY = '4W4DRL2D1NKSTPJF';
    let API_CALL = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=${API_KEY}
  `
    axios.get(API_CALL)
    .then((res)=>{dispatch(baseData(res))})
}


const baseData = (res)=>({
    type : 'BASE',
    payload: res
})


export default fetchData;