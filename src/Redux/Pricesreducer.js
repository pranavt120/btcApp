


const Prices = (state={

     info:null
    //  market:null,
    //  volume:null
                 }, actions)=>{
    switch(actions.type){
        case 'ADD_DATA':
            return {
                ...state,
                info:{
                    ...state.info,
                    info:actions.payload, 
                },
                // name:{
                //     ...state.name,
                //     name:actions.payload.product_id

                //  },
                // volume:{
                //     ...state.volume,
                //     market: actions.volume
                // }

            }

        default:
            return state;
    }
}

export default Prices;