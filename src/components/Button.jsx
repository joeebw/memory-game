import React from 'react'

const Button = ({children, ...rest}) => {
  return (
    <button 
      className='px-10 py-2 bg-yellow-300 rounded-3xl ease-in-out duration-300 hover:translate-y-[-5px] '
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button