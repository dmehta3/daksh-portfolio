import React from 'react'

const tabButtons = ({active, selectTab, children}) => {
const buttonClasses = active ? "text-white border-b border-orange-500" : "text-[#A9A9A9]"

  return (
    <button onClick={selectTab}>
        <p className= {`mr-3 font-semibold hover:text-white ${buttonClasses}`} >
        {children}
        </p>
    </button>
  )
}

export default tabButtons