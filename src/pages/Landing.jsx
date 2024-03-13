import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div>
        <div className='w-100 d-flex justify-content-center align-items-center p-5' style={{ height: '80vh' }}>
          <div className='row'>
            <div className='col shadow'>
              <h2>Media Player</h2>
              <p style={{ textAlign: 'justify' }}>
                A media player is a software or a hardware device that is used to play audio and video files. It can play digital media files from a storage device, a disc, or streamed from the internet.
                Examples of media players include software applications like Windows Media Player, VLC Media Player, or hardware devices like DVD players and Smart TVs.
              </p>
              <Link className='btn btn-success' to={'dash'}>Explore</Link>
            </div>
            <div className='col'>
              <img className='img-fluid rounded shadow' src="https://wpcom.files.wordpress.com/2021/06/924330_featured-image-for-wordpress-com_121820.png" alt="banner" />
            </div>
          </div>


        </div>

      </div>
      <div className='mt-3'>
        <h2 className='text-center'>Features</h2>
        <div className='d-flex flex-row justify-content-between p-3'>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ height: '300px' }} src="https://cdn.sanity.io/images/2ejqxsnu/production/3795b1de4a9d49a32030ead15ba679891ca49728-1200x800.gif" />
            <Card.Body>
              <Card.Title>Upload Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" />
            <Card.Body>
              <Card.Title>Play Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://media0.giphy.com/media/WFmjWifrj9DJ50YaXj/giphy.gif?cid=790b7611z0y887kh20zxrtqye380c3hdelroq8zxbon5946f&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className='mt-3 p-5'>
        <h2 className='text-center'>Why Media Player?</h2>
        <div className='d-flex mt-2 flex-row justify-content-center align-items-center'>
          <div>
            <h4>Simple , Secure and Friendly...</h4>
            <p style={{textAlign:'justify'}}>The same confusion happens with the words easy and “simple.” Easy means without effort. Simple means without complication. Some things may be easy, but very complicated. For instance, we flip on a light switch and our house has light.</p>
          </div>
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VtF2AgFSLAw?si=j_uI4JhVzP-yaG_O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing