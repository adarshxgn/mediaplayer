import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

const History = () => {
  const [historyDetails ,setHistoryDetails] = useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory = async ()=>{
    const responce = await getHistoryAPI()
    console.log(responce);
    if(responce.status>=200 && responce.status<300){
      setHistoryDetails(responce.data)
    }
  }

  const removeHistory = async (historyId)=>{
    await removeHistoryAPI(historyId)
    getHistory()
  }
  return (
    <div className='container' style={{paddingTop:"100px"}}>
      <div className=" mb-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className='table my-5 shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th><i className='fa-solid fa-ellipse'></i></th>
          </tr>
        </thead>
        <tbody>
        {
          historyDetails.length>0?
          historyDetails?.map((details,index)=>(
            <tr key={details?.id}>
            <td>{index+1}</td>
            <td>{details?.caption}</td>
            <td><a href={details?.link} target='_blank'>{details?.link}</a></td>
            <td>{details?.timeStamp}</td>
            <td><button onClick={()=>removeHistory(details?.id)} className='btn'><i className='fa-solid fa-trash'></i></button></td>
          </tr>
          ))
          :
          <div className='text-danger fw-bolder'>Your Watch History is Empty!!</div>
        }
        </tbody>
      </table>
    </div>
  )
}

export default History