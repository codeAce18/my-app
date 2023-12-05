import React from 'react'

import {Blog , Features, Footer, Header, Possibility, WhatGPT3 } from './container';
import {Cta, Brand, Navbar} from './components';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
       
  )
}

export default App