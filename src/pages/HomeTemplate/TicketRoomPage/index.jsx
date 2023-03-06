import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Loader from '../../../components/Loader';
import { fetchTicketRoom } from './duck/action';

export default function TicketRoomPage() {
  const loading = useSelector(state => state.ticketRoomReducer.loading);
  const data = useSelector(state => state.ticketRoomReducer.data);


  const dispatch = useDispatch();
  const param = useParams()
  useEffect(() => {
    dispatch(fetchTicketRoom(param.id))
  }, [dispatch, param.id])

  const handleOnChange = (e) => {
    console.log(e)
  }

  const handleSumbit = ()=>{
    
  }


  console.log(data?.danhSachGhe)
  const renderSeat = () => {
    return data?.danhSachGhe.map((seat) => {
      return <div className="form-check-inline col-1">
        <label className="form-check-label text-white mx-auto">
          <input type="checkbox" className="form-check-input" defaultChecked={seat.daDat} disabled={seat.daDat} onChange={handleOnChange} name={seat.tenGhe} />{seat.tenGhe}
        </label>
      </div>


    })
  }

  if (loading) return <Loader />
  return (
    <div className='container'>
      <h3 className='text-white'> DANH SÁCH GHẾ NGỒI - {data && data.thongTinPhim.tenPhim} - {data && data.thongTinPhim.tenCumRap} </h3>
      <hr color='white' />
      <h4 className='text-white text-center'>MÀN HÌNH CHIẾU</h4>
      <form onSubmit={handleSumbit()}>
        <div className='row justify-content-center'>
          {renderSeat()}
        </div>
        <div className='text-center'><button type='submit' className='btn btn-info'>Đặt vé</button></div>
      </form>
      <div className='row justify-content-center'>
        <div className="form-check-inline col-2">
          <label className="form-check-label text-white">
            <input type="checkbox" className="form-check-input" />Ghế Còn Trống
          </label>

        </div>
        <div className="form-check-inline col-2">
          <label className="form-check-label text-white">
            <input type="checkbox" className="form-check-input" checked readOnly />Ghế Đang Chọn
          </label>

        </div>
        <div className="form-check-inline col-2">
          <label className="form-check-label text-white">
            <input  type="checkbox" className="form-check-input" disabled checked readOnly />Ghế Đã Đặt
          </label>
        </div>
      </div>
    </div>
  )
}
