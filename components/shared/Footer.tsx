import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image src="assets/images/logo.svg" width={128} height={38} alt='logo' />
        </Link>
        <p>2023 | Evently All rigths recieved</p>
      </div>
    </footer>
  )
}

export default Footer