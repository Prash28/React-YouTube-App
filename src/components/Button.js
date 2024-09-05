import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="px-3 p-2 border rounded-xl border-gray-100 m-2 bg-gray-100 font-semibold text-sm">{name}</button>
    </div>
  )
}

export default Button