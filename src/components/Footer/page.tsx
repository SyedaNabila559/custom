import React from 'react'
import "./footer.css"
import Image from 'next/image'

function Footer() {
  return (
    <div className='footer'>
        <div className='heading'><p>connect❤️</p></div> 
      <div className='images'>
        <a href="https://www.linkedin.com/in/nabila-bannay-khan-a38b57313" target='_blank'><Image className='img' src='/li.png' alt='linkedin' width={200} height={200}></Image></a>
     
       <a href="https://github.com/SyedaNabila559" target='_blank'><Image className='img' src='/gh.png' alt='github' width={200} height={200}></Image></a>
      </div>
      <div className="mail">
        <a className='mail' href="mailto:"></a>
      </div>
    </div>
  )
}

export default Footer