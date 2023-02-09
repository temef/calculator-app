import { useState }from 'react'
import '../styles/Calculator.css'
import Cart from './Cart'
import Distance from './Distance'
import Item from './Item'
import Time from './Time'
import calculator from '../calculator'

export const Calculator = () => {

 const [value, setValue] = useState<number>(0)
 const [distance, setDistance] = useState<number>(0)
 const [items, setItems] = useState<number>(0)
 const [date, setDate] = useState<string>('')
 const [price, setPrice] = useState<number>(0)

 const calculate = () => {
    // alert(`value: ${value?.toFixed(2)} €, distance: ${distance} m, items: ${items} time: ${day}`)
    // alert(`Delivery price: ${deliveryPrice} €`)
    // testing Date parameter
    // console.log(day.getUTCDay(), day.getUTCHours(), day.getUTCMinutes())

    // check that all inputfields
    if(value == 0 || distance == 0 || items == 0 || date == '') {
      return alert('Remember to fill all input fields!')
    }
    const day = new Date(date)
    const deliveryPrice = calculator(value, distance, items, day)
    console.log(date)
    // After calculation return all fields back to empty
    setPrice(deliveryPrice)
    setValue(0)
    setDistance(0)
    setItems(0)
    setDate('')
}


  return (
    <div>
      <div>
        <Cart 
        value={value || 0}
        setValue={setValue}
        />
        <Distance 
        distance={distance || 0}
        setDistance={setDistance}
        />
        <Item
        item={items || 0}
        setItem={setItems}
        />
        <Time
        time={date}
        setTime={setDate}
        />
        </div>

        <button className="button" onClick={calculate}>Calculate delivery price</button>
        <div className="result-container">
            <b>Delivery price (€): {price == 0 ? ' - ' : price == -1 ? 'Free!' : price}</b>
        </div>
    </div>
  )
}

export default Calculator