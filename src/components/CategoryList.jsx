import React, { useEffect, useState } from 'react'
import { getCategory } from '../services/allApis'
import { deleteCategory, getSpecificVideo, updateCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'

function CategoryList({ status }) {
    const [cat, setCat] = useState([])
    const [deleteStatus, setDeleteStatus] = useState({})

    useEffect(() => {
        getData()
    }, [status, deleteStatus])

    const getData = async () => {
        const res = await getCategory()
        console.log(res)
        setCat(res.data)
    }



    const handleDelete = async (id) => {
        const res = await deleteCategory(id)
        console.log(res)
        if (res.status >= 200 && res.status < 300) {
            toast.success("Category Deleted!!")
            setDeleteStatus(res)
        }
        else {
            toast.error("Category Deletion Failed!!")
        }
    }

    const handleDrop = async (e, id) => {
        // console.log("category id:",id)
        const vid = e.dataTransfer.getData("videoId")
        // console.log("droppped video id:"+vid)
        const category = cat.find(item => item.id == id)
        // console.log(category)
        let { data } = await getSpecificVideo(vid)
        // console.log(video.data)
        category.videos.push(data)
        console.log(category)
        const res = await updateCategory(category, id)
        if (res.status >= 200 && res.status < 300) {
            toast.success(`${data.caption} added to ${category.name}`)
            getData()
        }
        else {
            toast.error("Video Adding to Category Failed!!")
        }

    }

    const handleDragOver = (e) => {
        e.preventDefault()
        // console.log("dragging over....")
    }
    return (
        <>
            <div className='mt-3 border shadow p-2'>
                {
                    cat ?
                        cat.map(item => (
                            <div className='bg-primary rounded shadow my-3 p-4' onDragOver={e => { handleDragOver(e) }} onDrop={e => { handleDrop(e, item.id) }}>
                                <div>
                                    <span>{item.name}</span>
                                    <i className="fa-solid fa-trash float-end" onClick={() => { handleDelete(item.id) }} style={{ color: "#ff0000" }}></i>
                                </div>
                                <div className='mt-3'>
                                    {
                                        item?.videos.map(v=>(
                                            <VideoCard video={v} cat={true}/>
                                        ))
                                    }
                                </div>

                            </div>
                        ))
                        :
                        <h1>No Categories!!</h1>
                }
            </div>
        </>
    )
}

export default CategoryList