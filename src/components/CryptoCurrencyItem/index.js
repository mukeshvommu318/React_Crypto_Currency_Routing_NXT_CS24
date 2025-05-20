import {Component} from 'react'
import './index.css'
class  CryptoCurrencyItem extends Component{
    render(){
        const {cryptoDetails}=this.props
        const {id,currency_name,currency_logo,usd_value,euro_value} = cryptoDetails
        return(
            <div className='containerItem'>
                <div className='table'>
                    <div className='logoName'>
                        <img src={currency_logo}/>
                        <p>{currency_name}</p>
                    </div>
                    <div className='values'>
                        <p>{usd_value}</p>
                        <p>{euro_value}</p>
                    </div>
               </div>
            </div>
        )
    }
}
export default CryptoCurrencyItem