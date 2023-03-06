import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Loader from '../../../components/Loader';
import { fetchDetailMovie } from './duck/action';
import { Link } from 'react-router-dom';
import LichChieu from './LichChieuPhim';
export default function DetailMoviePage() {
    const loading = useSelector((state) => state.detailMovieReducer.loading);
    const data = useSelector((state) => state.detailMovieReducer.data);
    const dispatch = useDispatch();

    const param = useParams()

    useEffect(() => {
        dispatch(fetchDetailMovie(param.id))
    }, [param.id, dispatch])

    console.log(data)

    if (loading) return <Loader />
    return (
        <div className='container'>
            <h2 className='text-white'>NỘI DUNG PHIM</h2>
            <hr style={{ borderTopColor: 'white' }} />
            <div className='row'>
                <div className='col-lg-4'>
                    <img className='img-fluid mx-auto d-block ' src={data && data.hinhAnh} alt="" />
                </div>
                <div className='col-lg-8 m-auto'>
                    <h4 className='text-white'>{data && data.tenPhim}</h4>
                    <p className='text-white'>Ngày khởi chiếu: {data && data.ngayKhoiChieu}</p>
                    <p className='text-white'>Mô tả: {data && data.moTa}</p>
                    <Link to={data && data.trailer} className="btn btn-danger" target={'_blank'} >Xem Trailer</Link>
                </div>
            </div>
            
            <h2 className='text-white mt-5'>LỊCH CHIẾU PHIM</h2>
            <hr style={{ borderTopColor: 'white' }} />
            <LichChieu id={param.id} />

        </div>
    )
}
