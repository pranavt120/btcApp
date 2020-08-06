import React, {Component} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  

  class Price extends Component{
        constructor(props){
        super(props);

        this.state={
            stockChartXValues:[],
            stockChartYValues:[]
        }

    }
    setXValues(data){
        // console.log(data, 'data')
        let xArray = []
        for( var key in data){
            xArray.push(key)
            }
        // console.log(xArray,'xArray')
        this.setState({
            stockChartXValues: xArray
        })
    }


    setYValues(data){
        //   console.log(data[0], 'data')
         let yArray = []
          for( var key in data){
              yArray.push(parseFloat(data[key]['1a. open (USD)']))
         }
         // console.log(xArray,'xArray')
         this.setState({
             stockChartYValues: yArray
         })
    }

   componentDidMount(){
     this.setXValues(this.props.data);
     this.setYValues(this.props.data);
   } 
   
 

    render(){
        console.log(this.state.stockChartYValues)
        let data = [{name:'', pv:''}]
        for(let i=0; i<1000; i++){
             data.push({name: this.state.stockChartXValues[i], pv:this.state.stockChartYValues[i]})
        }
        
    
        return(
            <LineChart
        width={1500}
        height={500}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
        )
    }
}

export default Price;