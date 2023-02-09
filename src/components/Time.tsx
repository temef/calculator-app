import React from 'react'

interface props {
    time: string
    setTime: (f:string) => void
}

export const Time: React.FC<props> = ({time, setTime}) => {

const handleChange = (f: React.ChangeEvent<HTMLInputElement>) => {
    setTime(String(f.currentTarget.value))
}
// time passing component

  return (
    <div className="container">
        <div className="input-text">
        <p>Date and time:</p>
        </div>
        <div className="input-container">
        <input
        className="inputs"
        type="datetime-local"
        onChange={handleChange}
        value={time}
        />
        </div>
    </div>
  )
}

export default Time