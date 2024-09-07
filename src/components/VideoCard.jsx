import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeCardAPI, storeHistoryAPI } from '../services/allAPI';

const VideoCard = ({displayData,setDeleteVideoResponce}) => {
  console.log(displayData);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    // save history in json server
    const{caption,link} = displayData
    // get date and time in watch history
    const sysTime = new Date()
    const timeStamp = sysTime.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    const videoDetails ={caption,link,timeStamp}
    await storeHistoryAPI(videoDetails)
  }
  const removeCard = async (cardId)=>{
   const result = await removeCardAPI(cardId)
    // pass responce to view component (child to parent)
    setDeleteVideoResponce(result?.data)
  }
  return (
    <>
      <Card>
      <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.url} />
    <Card.Body>
      <Card.Text className='d-flex justify-content-between'>
        <p>{displayData?.caption}</p>
        <button onClick={()=>removeCard(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
      </Card.Text>
    </Card.Body>
  </Card> 
  <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="500" src={`${displayData?.link}?autoplay=1`} title="Lucifer Official Trailer | Mohanlal | Prithviraj Sukumaran | Antony Perumbavoor | Murali Gopy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Modal.Body>
      </Modal>
  </>
  )
}

export default VideoCard