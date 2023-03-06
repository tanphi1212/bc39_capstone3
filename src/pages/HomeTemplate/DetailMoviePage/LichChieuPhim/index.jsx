import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLichChieu } from './duck/action';
import { Link } from 'react-router-dom';
import Loader from '../../../../components/Loader';
export default function LichChieu(props) {
    const { id } = props;
    const loading = useSelector(state => state.lichChieuReducer.loading);
    const data = useSelector(state => state.lichChieuReducer.data);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchLichChieu(id))
    }, [dispatch, id])

    const renderCumRap = () => {
        return data?.map((item) => {
            return <li key={item.maHeThongRap} className="nav-item">
                <a className="nav-link text-white" id="pills-home-tab" data-toggle="pill" href={`#${item.maHeThongRap}`} role="tab" aria-controls="pills-home" aria-selected="true"><h4 className='text-uppercase'>{item.tenHeThongRap}</h4></a>
            </li>
        })
    }

    const renderLichChieuTheoCum = () => {
        return data?.map((item) => {
            return <div className="tab-pane fade" key={item.maHeThongRap} id={item.maHeThongRap} role="tabpanel" aria-labelledby="pills-home-tab">
                <div className='row'>
                    {item.cumRapChieu.map((cinema) => {
                        return <div className='col-lg-6' key={cinema.maCumRap}>
                            <div className="card border-primary" style={{ backgroundColor: 'transparent', border: 'none' }} >
                                <div className="card-body">
                                    <h4 className="card-title text-center text-white">{cinema.tenCumRap}</h4>
                                    <div className='row'>
                                        {cinema.lichChieuPhim.map((time) => {
                                            return <div className='col-4 text-center my-1' key={time.maLichChieu}><Link to={`/ticket-room/${time.maLichChieu}`} className='btn btn-primary'>{time.ngayChieuGioChieu}</Link></div>
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    })}
                </div>
            </div>
        })
    }

    if(loading) return <Loader />
    return (
        <div>
            <ul className="nav nav-pills flex-column flex-sm-row" id="pills-tab" role="tablist">
                {renderCumRap()}
            </ul>
            <div className="tab-content" id="pills-tabContent">
                {renderLichChieuTheoCum()}
            </div>
        </div>
    )
}
