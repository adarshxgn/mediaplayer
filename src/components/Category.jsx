import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, removeCategoryAPI } from '../services/allAPI';

const Category = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAllCategory = async () => {
    const response = await getCategoryAPI();
    if (response.status >= 200 && response.status < 300) {
      setAllCategory(response.data);
    }
  };

  const handleAddCategory = async () => {
    if (categoryName) {
      // API call
      const response = await addCategoryAPI({ categoryName, allVideos: [] });
      if (response.status >= 200 && response.status < 300) {
        // toast.success("Category added successfully!");
        getAllCategory(); 
      }
      setCategoryName("");
      handleClose();
    } else {
      toast.warning("Please fill the form completely!!!");
    }
  };

  const removeCategory = async (categoryId) => {
    const response = await removeCategoryAPI(categoryId);
    if (response.status >= 200 && response.status < 300) {
      toast.success("Category removed successfully!");
      getAllCategory();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-around">
        <h3>All Categories</h3>
        <button
          onClick={handleShow}
          style={{ width: '50px', height: '50px' }}
          className='btn btn-info rounded-circle fw-bolder fs-5'>
          +
        </button>
      </div>

      <div className="container-fluid mt-3">
        {
          allCategory.length > 0 ?
            allCategory.map((categoryDetails, index) => (
              <div key={index} className="border rounded p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <h5>{categoryDetails?.categoryName}</h5>
                  <button onClick={() => removeCategory(categoryDetails.id)} className="btn">
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-6">
                    {/* videos of particular categories */}
                  </div>
                </div>
              </div>
            ))
            :
            <div className="text-danger fw-bolder">No categories are added yet!!</div>
        }
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel className='mb-3' controlId="floatingInputCaption" label="Category Name">
            <Form.Control
              onChange={e => setCategoryName(e.target.value)}
              type="text"
              placeholder="Category Name"
              value={categoryName} // Bind the input value
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className="btn btn-info">Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  );
};

export default Category;