import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';


function Addvideo({setRes}) {
    const [show, setShow] = useState(false);
    const [video, setVideo] = useState({
        caption: '', url: '', image: ''
    })

    const getData = (e) => {
        const { name, value } = e.target
        // console.log(name,value)
        if (name == "caption") {
            setVideo({ ...video, caption: value })
        }
        if (name == "url") {
            const url = value
            const furl = url.split("v=")
            console.log(furl)
            const videourl = `https://www.youtube.com/embed/${furl[1]}?si=Rvt5xEVzXDu7N4yd&autoplay=1`
            console.log(videourl)
            setVideo({ ...video, url: videourl })
            // setVideo({...video,url:value})
        }
        if (name == "image") {
            setVideo({ ...video, image: value })
        }
    }

    const handleAddVideo = async () => {
        const { caption, image, url } = video
        if (!caption || !image || !url) {
            toast.info("Enter Valid Data!!")
        }
        else {
            console.log(video)

            const res = await uploadVideo(video)
            console.log(res)
            if (res.status >= 200 && res.status < 300) {
                setRes("success")
                toast.success("Video Uploaded SuccessFully!!")
                handleClose()
            }
            else {
                toast.error("Video Uploading Failed!!")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <span className='btn' onClick={handleShow}>
                <i class="fa-solid fa-circle-plus fa-lg"></i>
            </span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='mt-3'>
                            <Form.Control size="sm" onChange={(e) => getData(e)} name='caption' type="text" placeholder="Caption" />
                        </div>
                        <div className='mt-3'>
                            <Form.Control size="sm" onChange={(e) => getData(e)} name='image' type="text" placeholder="Image URL" />
                        </div>
                        <div className='mt-3'>
                            <Form.Control size="sm" onChange={(e) => getData(e)} name='url' type="text" placeholder="Video URL" />
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddVideo}>Upload</Button>
                </Modal.Footer>
            </Modal>


            
        </div>
    )
}

export default Addvideo