import React from 'react';
import Header from './layouts/header'
import Footer from './layouts/footer'
import Main from './layouts/main'

export default class App extends React.Component {

  render() {
    return(
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    )
  }
}