import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import Loader from '../../../../components/Loader';
import { actFetchData } from './duck/action';
import Movie from './Movie';
export default function ListMoviePage() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesPerRow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        rows: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const loading = useSelector((state) => state.listMovieReducer.loading)
    const data = useSelector((state) => state.listMovieReducer.data)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actFetchData())
    },[dispatch])

    const renderMovieList = () =>{
        return data?.map((item) => {
            return <Movie key={item.maPhim} movie={item}/>
        })
    }

    console.log(data)
    if(loading) return <Loader />;
    return (
        <>
            <h3 className='text-white mt-5 text-center'>DANH SÁCH PHIM</h3>
            <Slider className='mt-4' {...settings}>
               {renderMovieList()}
            </Slider>
        </>
    )
}
