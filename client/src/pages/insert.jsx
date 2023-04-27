import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/form'

const Insert = () => {
  return (
    <>
      <div className='d-flex justify-content-center p-4'>
        <Link to="/" className='btn btn-primary'>Regresar</Link>
      </div>
      <div className='d-flex justify-content-center p-4'>
        <Form />
      </div>
    </>
  )
}

export default Insert