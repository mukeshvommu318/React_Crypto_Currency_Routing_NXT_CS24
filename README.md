![image alt] ##-heading , **----**->bold
# **Crypto Currency App**
![image alt](https://github.com/mukeshvommu318/React_Crypto_Currency_Routing_NXT_CS24/blob/7558c6328c64df73093a9bb3d3e4ac73fb914a8c/Screenshot%20(4).png)

## Learnings
-> **How to get the Data from APIs**

    API : https://apis.ccbp.in/crypto-currency-converter
    - componentDidMount() 
    - key Features : Fetching Data from APIS, Seting Timiers, Add event Listeners
    **Code**
    state ={updated:[],isLoader:true}
    componentDidMount(){
        this.getCryptoData()
    }
    getCryptoData=async()=>{
        const response = await fetch('https://apis.ccbp.in/crypto-currency-converter')
        const data = await response.json()
        this.setState({updated:data,isLoader:false})
    }
        
## Note :
-> We make Api Calls from "componentDidMount() method"

## Added the Loader
-> When the data is featching on mean time, the loader get Displayed

-> In react v19 Did not added  "react-loader-spinner" Library 

-> I have used CSS custom loader, means created component for Loader(index.js,index.css)










