import React from 'react'

interface props {
    distance: number
    setDistance: (f:number) => void
}

export const Distance: React.FC<props> = ({distance, setDistance}) => {
  
  const handleChange = (f: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(Number(f.currentTarget.value))
}
// distance component

  return (
    <div className="container">
      <div className="input-text">
      <p>Delivery distance (m):</p>
      </div>
      <div className="input-container">
      <input
      className="inputs"
      type="text"
      value={distance || ''}
      onChange={handleChange}
      />
      </div>
    </div>
  )
}

export default Distance