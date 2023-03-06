import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
  const {item}= props
  return (
    <div className='col-lg-3 col-md-6 col-sm-6 mt-3 p=5' >
      <div className="card text-left" style={{backgroundColor: 'transparent', border: 'none'}}>
        <img className="card-img-top mx-auto" src={item.hinhAnh} alt='' style={{ height:300, width:250}}/>
        <div className="card-body">
          <p className="card-title text-white text-center">{item.tenPhim}</p>
          <div className="text-center">
                    <Link to={`/detail/${item.maPhim}`} className='btn btn-success mr-3'>Chi Tiết</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
