import React from 'react'
import { Link } from 'react-router-dom';

export default function Movie(props) {
    const {movie} = props;

    return (
        <div>
            <div className="card p-auto" style={{ backgroundColor: 'transparent', border: 'none'}} >
                <img className="card-img-top mx-auto" src={movie.hinhAnh} style={{ width: 200, height: 250} } alt='' />
                <div className="card-body text-center">
                    <Link to={`/detail/${movie.maPhim}`} className='btn btn-success'>Chi Tiết</Link>
                </div>
            </div>
        </div>
    )
}
