import React from 'react'

interface props {
    item: number
    setItem: (f:number) => void
}

export const Item: React.FC<props> = ({item, setItem}) => {

const handleChange = (f: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(1000, Number(f.target.value)));
    setItem(Number(value))
} 
// component which is taking care for amount of items

    return (
    <div className="container">
        <div className="input-text">
        <p>Amount of items:</p>
        </div>
        <div className="input-container">
        <input
        className="inputs"
        type="number"
        value={item || ''}
        onChange={handleChange}
        step="1"
        min="0"
        />
        </div>
    </div>
  )
}

export default Item