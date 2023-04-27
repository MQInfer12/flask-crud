import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Form from '../components/form'

const Edit = () => {
  const { id } = useParams();

  return (
    <>
      <div className='d-flex justify-content-center p-4'>
        <Link to="/" className='btn btn-primary'>Regresar</Link>
      </div>
      <div className='d-flex justify-content-center p-4'>
        <Form id={id} />
      </div>
    </>
  )
}

export default Edit