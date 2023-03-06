import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDSRapPhim } from './duck/action';
import Loader from './../../../../components/Loader';
import RapPhim from './RapPhim';
export default function DSRachPhim() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const loading = useSelector((state) => state.DSRapPhimReducer.loading)
  const data = useSelector((state) => state.DSRapPhimReducer.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDSRapPhim());
  }, [dispatch])

  const renderCinema = () => {
    return data?.map((item) => {
      return <RapPhim key={item.maHeThongRap} cinema={item} />
    })
  }

  if (loading) return <Loader />;
  // console.log(data)
  return (
    <>
      <h3 className='text-center text-white mt-5'>HỆ THỐNG RẠP</h3>
      <div>
        <Slider {...settings} className='mt-4'>
          {renderCinema()}
        </Slider>
      </div>
    </>
  );
}
