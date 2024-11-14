import React from 'react'
import './header.css'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div className='header'>
     <div className='logo'>
        <h1>Nabila</h1>
     </div>
     <div className='links'>
        <Link className='nav' href='/'>home</Link>
        <Link className='nav' href='/about'>about</Link>
        <Link className='nav' href='/work'>work</Link>
     </div>
     <div className='imagesHeader'> 
     <a href="https://www.linkedin.com/in/nabila-bannay-khan-a38b57313" target='_blank'><Image className='img' src='/li.png' alt='linkedin' width={200} height={200}></Image></a>
     <a href="https://github.com/SyedaNabila559" target='_blank'><Image className='img' src='/gh.png' alt='github' width={200} height={200}></Image></a>

      
     </div>
    </div>
  )
}

export default Header