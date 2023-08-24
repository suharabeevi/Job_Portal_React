import React from 'react'
import HomePage from '../../Components/HomePage/HomePage'
import CommonHeader from '../../Components/Header/CommonHeader'
import UserSideFooter from '../../Components/Footer/UserSideFooter'

function Home() {
    return (
      <div>
        <CommonHeader/>
        <HomePage/>
        <UserSideFooter/>
      </div>
    )
  }
  
  export default Home;