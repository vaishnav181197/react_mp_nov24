import React, { useEffect, useState } from 'react'
import { allHistory } from '../services/allApis'
import { Link } from 'react-router-dom'

function History() {

  const [history, setHistory] = useState([])

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    const res = await allHistory()
    console.log(res.data)
    setHistory(res.data)
  }
  return (
    <>
      <div className='p-5'>
        <Link to={'/dash'} className='btn btn-info float-end mb-5'>Dashboard</Link>
        <h4>Watch History</h4>

        <table className="table table-bordered">
          <tr>
            <th>Caption</th>
            <th>Video URL</th>
            <th>Date and Time</th>
            <th></th>
          </tr>
          {
            history ?
              history.map(item => (
                <tr>
                  <td>{item.caption}</td>
                  <td>{item.url}</td>
                  <td>{item.datetime}</td>
                  <td>
                    <i className="fa-solid fa-trash text-light" ></i>
                  </td>
                </tr>
              ))
              :
              <p className='text-danger'>No History Found!!</p>
          }
        </table>
      </div>

    </>
  )
}

export default History