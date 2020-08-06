import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchBasePrices from '../ActionCreatorBase';
import fetchData from '../ActionCreaterUpdated'
import Charts from './Chart';
import Price from './Prices';

  


class Main extends Component{

    constructor(props){
        super(props);

        this.state={
            isLoaded : false
        }
        this.content = this.content.bind(this)
    }

    async componentDidMount(){
        this.props.fetchData();
        await this.props.fetchBasePrices();
      
        this.setState({
           isLoaded: true
       })
    }
     
    content(){
        if(this.props.BasePrices.base !== null && this.props.info!==null){
            // console.log(this.props.BasePrices.base.base.data['Time Series (Digital Currency Daily)'], 'main');

            return(
                <>
                <Charts price={this.props.info.info.price} name={this.props.info.info.product_id}/> 
                <Price  data = {this.props.BasePrices.base.base.data['Time Series (Digital Currency Daily)']}/>
                
                </>
            )
        }
       
    }

    render(){
        console.log(this.props,'props')
        return(
            <div>
            {this.state.isLoaded ? this.content(): <h1>Null</h1>}

            </div>
            )
    }
}


 const mapStateToProps = (props)=>{
     return{
        info:props.Prices.info,
        BasePrices: props.BasePrices

     }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchBasePrices: ()=>{dispatch(fetchBasePrices)},
        fetchData: ()=>{dispatch(fetchData)}
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Main);