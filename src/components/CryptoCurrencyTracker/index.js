import {Component} from 'react'
import CryptoCurriencesList from '../CryptoCurriencesList'
import Loader from '../Loader'
import './index.css'
class CryptoCurrencyTracker extends Component{
    state ={updated:[],isLoader:true}
    componentDidMount(){
        this.getCryptoData()
    }
    getCryptoData=async()=>{
        const response = await fetch('https://apis.ccbp.in/crypto-currency-converter')
        const data = await response.json()
        this.setState({updated:data,isLoader:false})
    }
    render(){
        const {updated,isLoader}=this.state
        return(
            <div className='containerTracker'>
                {isLoader ? <Loader/> :
                 <CryptoCurriencesList cryptoList={updated}/>}
                   
            </div>
        )
    }
}
export default CryptoCurrencyTracker