import {Component} from 'react'
import CryptoCurrencyItem from '../CryptoCurrencyItem'
class CryptoCurriencesList extends Component{
    render(){
        const {cryptoList}=this.props
        return(
            <div>
                <h1 style={{color:"#00e7ff",fontSize:"45px",textAlign:"center",margin:"0"}}>Cryptocurrency Tracker</h1>
                <img src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"/>
                <div style={{border:"2px solid  #00e7ff",borderRadius:"20px"}}>
                <div style={{display:"flex",justifyContent:"space-between",margin:"0px 120px", color:"#ffffff", fontSize:"20px",fontWeight:"bold"}}>
                    <p>Coin Type</p>
                    <div style={{display:"flex",gap:"30px"}}>
                        <p>USD</p>
                        <p>EURO</p>
                    </div></div>
                {cryptoList.map(each=>(<CryptoCurrencyItem key = {each.id} cryptoDetails={each}/>))}
                </div>
            </div>
        )
    }
}
export default CryptoCurriencesList