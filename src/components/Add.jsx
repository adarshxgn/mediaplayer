import React, { useState } from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';


const Add = ({setUploadVideoResponce}) => {
  const [invalidLink , setInvalidLink] =useState(false)
  const [videoDetails,setVideoDetails] = useState({
    caption:"",url:"",link:""
  })
  const getEmbedURL = (link)=>{
    if(link.includes("v=")){
      let videoId = link.split("v=")[1].slice(0,11)
      console.log(videoId);
      setVideoDetails({...videoDetails,link:`http://www.youtube.com/embed/${videoId}`})
      setInvalidLink(false)
    }else{
      // invalid url
      console.log("invalid url");
      setVideoDetails({...videoDetails,link:""})
      setInvalidLink(true)
      
    }
  }
  const handleUpload =async()=>{
    console.log("inside handle upload");
    const {caption,url,link} = videoDetails
    if(caption && url && link ){
      // toast.success("api call")
      const result = await uploadVideoAPI(videoDetails)
      if(result.status>=200 && result.status<300){
        handleClose()
        setVideoDetails({...videoDetails,caption:"",url:"",link:""})
        toast.success(`${result.data.caption} added to your collection`)
        setUploadVideoResponce(result)
      }
    }else{
      toast.warning("Please fill the form compleately")
    }
    

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(videoDetails);
  
  return (
 <>
      <div className='d-flex align-items-center'>
        <h4>Upload New Video</h4>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle  fs-5'>+</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='border rounded p-3'>
          <FloatingLabel controlId="floatingInputCaption" label="Video Caption" className="mb-3">
          <Form.Control onChange={e=>setVideoDetails({...videoDetails, caption:e.target.value})} type="text" placeholder="Video Caption" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputImage" label="Image URL" className="mb-3">
          <Form.Control onChange={e=>setVideoDetails({...videoDetails, url:e.target.value})} type="text" placeholder="Image URL" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputLink" label="Youtube Video Link" className="mb-3">
          <Form.Control onChange={e=>{getEmbedURL(e.target.value)}} type="text" placeholder="youtube Video Link" />
        </FloatingLabel>
        {
          invalidLink &&
          <div className='text-danger'> invalid link</div>
        }
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={3000} theme='colored' transition={Bounce} /> 
 </>
  )
}

export default Add