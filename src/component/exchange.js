import { useState, useEffect } from "react";
import '../component_css/exchange.css'

export default function Exchange(props){
    let rate = JSON.parse(props.exchange);
    rate.push({r030: 800, txt: 'Гривня', rate: 1, cc: 'UAH', exchangedate: (new Date().getDate())+1});
    let [obj, setObj] = useState(rate);

    // ON SELECT currency
    const onSelect = (e) => {
        let x;
        let y;
        for(let i = 0; i < obj.length; i++) {
            if(obj[i].cc === e.target.value){
                x = obj[i].rate
            }
        }
        if(e.target.getAttribute('class').includes('from')){
            for(let i = 0; i < obj.length; i++) {
                if(obj[i].cc === document.querySelector('.to').value){
                    y = obj[i].rate
                }
            }
            document.querySelector('.q_from').value = 1
            let result = x / y * document.querySelector('.q_from').value
            document.querySelector('.q_to').value = result;
        } else if(e.target.getAttribute('class').includes('to')) {
            for(let i = 0; i < obj.length; i++) {
                if(obj[i].cc === document.querySelector('.from').value){
                    y = obj[i].rate
                }
            }
            document.querySelector('.q_to').value = 1
            let result = x / y * document.querySelector('.q_to').value
            document.querySelector('.q_from').value = result;
        }
    }
    // ON CHANGE currency quantity
    const inp = (e)=>{
        let x;
        let y;
        for(let i = 0; i < obj.length; i++) {
            if(obj[i].cc === e.target.parentElement.querySelector('select').value){
                x = obj[i].rate
            }
        }
        if(e.target.getAttribute('class').includes('q_from')){
            for(let i = 0; i < obj.length; i++) {
                if(obj[i].cc === document.querySelector('.to').value){
                    y = obj[i].rate
                }
            }
            let result = x / y * document.querySelector('.q_from').value
            document.querySelector('.q_to').value = result;
        } else if(e.target.getAttribute('class').includes('q_to')) {
            for(let i = 0; i < obj.length; i++) {
                if(obj[i].cc === document.querySelector('.from').value){
                    y = obj[i].rate
                }
            }
            let result = x / y * document.querySelector('.q_to').value
            document.querySelector('.q_from').value = result;
        }
    }

        return(
            <form>
                <fieldset>
                    <legend>From</legend>
                    <select className="select from" onChange={onSelect.bind(this)}>{obj.map((el)=><option>{el.cc}</option>)}</select>
                    <input className="quantity q_from" defaultValue='1' onChange={inp.bind(this)}/>
                </fieldset>
                <fieldset>
                    <legend>To</legend>
                    <input className="quantity q_to" defaultValue='1' onChange={inp.bind(this)}/>
                    <select className="select to" onChange={onSelect.bind(this)}>{obj.map((el)=><option>{el.cc}</option>)}</select>
                </fieldset>
                
            </form>
        )
    
}