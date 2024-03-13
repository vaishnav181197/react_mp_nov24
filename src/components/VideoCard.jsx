import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { deleteVideo,addhistory } from '../services/allApis';
import { toast } from 'react-toastify';


function VideoCard({ video,setDel,cat }) {
    const [show, setShow] = useState(false);
    const [his,setHis]=useState({
        caption:video.caption,url:video.url,datetime:''
    })

   

    const handleDelete = async (id) => {
        const res = await deleteVideo(id)
        if (res.status >= 200 && res.status < 300) {
            setDel("Success")
            toast.success("Video Deleted!!")
        }
        else {
            toast.error("Video Deletion Failed!!")
        }
    }

    const handleClose = () => {
        console.log(his)
        addhistory(his)
        setShow(false)
    };
    const handleShow = () => {
        setHis({...his,datetime:new Date()})
        setShow(true)
    };

    const handleDrag=(e,id)=>{
        console.log("Video ID:"+id)
        e.dataTransfer.setData("videoId",id)
    }
    return (
        <>
            <Card style={cat?{ width: '12rem' }:{ width: '18rem' }} className='ms-5 mt-3' draggable onDragStart={(e)=>{handleDrag(e,video?.id)}} >
                <Card.Img variant="top" onClick={handleShow} src={video.image} />
                <Card.Body>
                    <Card.Title>
                        {video.caption}
                        <Button className='btn float-end' onClick={() => { handleDelete(video.id) }}>
                            <i className="fa-solid fa-trash" style={{ color: "#f60404" }}></i>

                        </Button>
                    </Card.Title>
                </Card.Body>
            </Card >

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >            <Modal.Header closeButton>
                    <Modal.Title>{video.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <iframe width="100%" height="400" src="https://www.youtube.com/embed/RLzC55ai0eo?si=Rvt5xEVzXDu7N4yd&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <iframe width="100%" height="400" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </Modal.Body>

            </Modal >
        </>
    )
}

export default VideoCard