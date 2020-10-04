import React from 'react'
import * as FaIcon from 'react-icons/fa'

const FaLoader = ({ icon, className }) => {
  const Icon = FaIcon[icon]
  return (
    <>
      {
        Icon
          ? (<Icon className={className} />)
          : null          
      }
    </>
  )
}

export default FaLoader
