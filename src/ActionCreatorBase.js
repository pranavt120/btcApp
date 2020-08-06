import axios from 'axios';

const subscribe = {
    type: "subscribe",
    product_ids:[
        'BTC-USD'
    ],
    channels: [
        {
            "name": "ticker",
            "product_ids": [
                'BTC-USD'
            ]
        }
    ]
}



export const fetchBasePrices = (dispatch)=>{
    let ws = new WebSocket("wss://ws-feed.pro.coinbase.com");
        ws.onopen = ()=>{
            ws.send(JSON.stringify(subscribe));
            console.log('connected');
        }
    
        ws.onmessage = (evt)=>{
            const data = JSON.parse(evt.data);
            console.log(JSON.parse(evt.data),'main data');
            dispatch(basePrice(data));
        }
    
    
        ws.onclose = ()=>{
            ws.send(JSON.stringify(subscribe));
            console.log('connection ended');
        }
    
        ws.onerror  = (err)=>{
            console.log(err);
        }
}





const basePrice = (data)=>({
    type: 'ADD_DATA',
    payload: data
    
})


export default fetchBasePrices;





