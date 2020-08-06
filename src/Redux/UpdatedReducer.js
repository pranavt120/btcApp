


const BasePrices = (state={

    base:null
   //  market:null,
   //  volume:null
                }, actions)=>{
   switch(actions.type){
       case 'BASE':
           return {
               ...state,
               base:{
                   ...state.base,
                   base:actions.payload, 
               },
           }

       default:
           return state;
   }
}

export default BasePrices;