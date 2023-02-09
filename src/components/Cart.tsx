import React from 'react'

interface props {
    value: number
    setValue: (f:number) => void
}

export const Cart: React.FC<props> = ({value, setValue}) => {

const handleChange = (f: React.ChangeEvent<HTMLInputElement>) => {
  const value = Math.max(0, Math.min(1000, Number(f.target.value)));
  console.log(value)
    setValue(Number(value))
}

// Cart price value component

  return (
    <div className="container">
      <div className="input-text">
        <p>Cart value (€):</p>
      </div>
      <div className="input-container">
        <input
        className="inputs"
        type="number"
        value={value || ''}
        onChange={handleChange}
        step={".01"}
        min="0"
        />
        </div>
    </div>
  )
}

export default Cart