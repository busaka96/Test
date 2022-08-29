import { useState, useEffect } from "react";
import '../component_css/header.css'


export default function Header(props){
    let [usd, setUsd] = useState(0)
    let [eur, setEur] = useState(0)
    useEffect(()=>{
        if(props.upd) {
            let exchange = JSON.parse(props.exchange);
            let rateEur;
            let rateUsd;
            exchange.forEach(el => {
                if(el.cc == 'EUR'){
                    rateEur = el.rate;
                } else if (el.cc == 'USD'){
                    rateUsd = el.rate;
                }
            });
            setEur(eur = rateEur)
            setUsd(usd = rateUsd)
        }
    })
    console.log(JSON.parse(props.exchange))
    return(
        <div className="header">
            <nav>
                <h1>$/E</h1>
                <ul>
                    <li>USD: {usd}</li>
                    <li>EUR: {eur}</li>
                </ul>
            </nav>
        </div>
    )
}