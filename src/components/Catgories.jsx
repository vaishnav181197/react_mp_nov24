import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import {addCategory} from '../services/allApis'
import CategoryList from './CategoryList';


function Catgories() {
  const [show, setShow] = useState(false);
  const [category,setCategory]=useState("")
  const [addStatus,setAddStatus]=useState({})

  const getData=(val)=>{
    if(val){
      setCategory(val)
    }
  }

  const handleSubmit=async()=>{
    if(!category){
      toast.info("Enter Valid Data!!")

    }
    else{
      console.log(category)
      const data={name:category,videos:[]}
      const res=await addCategory(data)
      if(res.status>=200 && res.status<300){
        toast.success("Category Added!!")
        setCategory("")
        handleClose()
        setAddStatus(res.data)
      }
      else{
        toast.error("Category Adding Failed!!!")
      }

    }
  }

  const handleClose = () => {
    setShow(false)
    setCategory("")
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid'>
        <Button variant='info' onClick={handleShow}>
          Add Category
        </Button>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <Form.Group className="mb-3" >
            <Form.Label>Category</Form.Label>
            <Form.Control onChange={(e)=>{getData(e.target.value)}} type="text" placeholder="Enter Category Name" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>

      <CategoryList status={addStatus}/>




    </>
  )
}

export default Catgories