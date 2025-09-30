import { useEffect , useState } from "react"


function useCurrencyInfo(currency){
    const [data ,setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_RguS02lzQwZ6St2n0XwgrzlLhFGQ2NJBEPd9VI9m&currencies=${currency}%2CUSD%2CCAD.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;