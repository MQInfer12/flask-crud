import React from 'react'
import Table from '../components/table'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <>
      <div className='d-flex justify-content-center p-4'>
        <Link to="/insert" className='btn btn-primary'>Añadir</Link>
      </div>
      <Table />
    </>
  )
}

export default Index