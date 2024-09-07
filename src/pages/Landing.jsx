import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/music-beat.gif'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/img1.jpg'
import feature2 from '../assets/img2.avif'
import feature3 from '../assets/img3.webp'

const Landing = () => {
  return (
    <div style={{paddingTop:"100px"}} className='container'>
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:"justify"}} className='mt-5'>Media player app will allow user to add and remove their uploaded videos from outube and also allow them to arrange in different catogories b drag and drop. User can </p>
          <Link to={'/home'} className='btn btn-primary'>Get started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src={LandingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>awd</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>

      </div>
      <div className="row my-5 border p-5 rounded">
        <div className="col-lg-5 ">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p style={{textAlign:"justify"}}><span className='fs-5'>Play everything: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui similique beatae dignissimos magnam illo excepturi recusandae facilis exercitationem corporis, minus, et eius doloribus placeat officiis ipsa natus odio omnis dolor.</p>
          <p style={{textAlign:"justify"}}><span className='fs-5'>Play everything: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui similique beatae dignissimos magnam illo excepturi recusandae facilis exercitationem corporis, minus, et eius doloribus placeat officiis ipsa natus odio omnis dolor.</p>
          <p style={{textAlign:"justify"}}><span className='fs-5'>Play everything: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui similique beatae dignissimos magnam illo excepturi recusandae facilis exercitationem corporis, minus, et eius doloribus placeat officiis ipsa natus odio omnis dolor.</p>
          
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="600" height="500" src="https://www.youtube.com/embed/x1-Ya0NZQso" title="Lucifer Official Trailer | Mohanlal | Prithviraj Sukumaran | Antony Perumbavoor | Murali Gopy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    
  )
}

export default Landing