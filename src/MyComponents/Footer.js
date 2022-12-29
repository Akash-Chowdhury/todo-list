import React from 'react'

const Footer = () => {
  let footerStyle={
    position:"relative",
    width: "100%",
    // top: "100vh"
    
  }
  return (
    <footer className='bg-dark text-light py-3 mt-5 mb-0' style={footerStyle}>
     <p className='text-center'> 
     Copyright &copy; 2023 by Akash Chowdhury.
     </p>
    </footer>
  )
}

export default Footer
