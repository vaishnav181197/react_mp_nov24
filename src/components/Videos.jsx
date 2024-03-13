import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApis'

function Videos({resStatus}) {
  const [delStatus,setDelStatus]=useState("")
  const [videolist, setVideoList] = useState([])
  useEffect(() => {
    getData()
  }, [resStatus,delStatus])

  const getData = async () => {
    const res = await getVideos()
    console.log(res.data)
    setVideoList(res.data)
  }

  return (
    <div className='bg-light w-100 p-3 row'>
      {
        videolist ?
          videolist.map(item => (
            <VideoCard video={item} setDel={setDelStatus}  className="m-5"/>
          ))
          :
          <h3>No Videos Available</h3>
      }
      
    </div>
  )
}

export default Videos