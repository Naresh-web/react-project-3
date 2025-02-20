import React from 'react'

import Header from '../Header/header'
import Footer from '../footer/footer'

const Layout = ({children}) => {
  return <>

        <Header/>
        <div>{children}</div>
        <Footer/>
    </>
}

export default Layout