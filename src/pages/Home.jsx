import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Catogory from '../components/Category'
const Home = () => {
  const [uploadVideoResponce,setUploadVideoResponce]=useState("")
  return (
    <div  style={{paddingTop:"100px"}}>
      <div className="container d-flex justify-content-between">
        <Add setUploadVideoResponce={setUploadVideoResponce} />
        <Link to={'/history'}>Watch history</Link>
      </div>
      <div className="container-fluid row my-5">
        <div className="col-lg-6">
          <h1>All videos</h1>
          <View uploadVideoResponce={uploadVideoResponce} />
        </div>
        <div className="col-lg-6">
          <Catogory/>
        </div>
      </div>
    </div>
  )
}

export default Home