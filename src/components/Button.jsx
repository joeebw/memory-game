import React from 'react'

const Button = ({children, ...rest}) => {
  return (
    <button 
      className='px-10 py-2 bg-yellow-300 rounded-3xl ease-in-out duration-300 hover:animate-bounce '
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button