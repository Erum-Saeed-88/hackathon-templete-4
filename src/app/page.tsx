import React from 'react'
// import Header from './components/Header/Header'
// import Navbar from './components/Navbar/Navbar'
import Home from '@/app/components/Hero/Hero';
import Products from '@/app/components/Hero/Products';
import Latest from '@/app/components/Hero/Latest';

export default function page() {
  return (
    <div>

{/* <Header/>
<Navbar/> */}
<Home/>
<Products/>
<Latest/>




    </div>
  )
}
