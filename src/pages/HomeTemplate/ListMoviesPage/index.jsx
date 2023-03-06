import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/Loader';
import { fetchListMovie } from './duck/action';
import Item from './Item';

export default function ListMoviesPage() {
    const loading = useSelector((state) => state.listMoviesReducer.loading);
    const data = useSelector(state => state.listMoviesReducer.data);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchListMovie())
    },[dispatch])
    const renderListMovie = ()=>{
        return data?.map((item) =>{
            return <Item key={item.maPhim} item={item}/>
        })
    }
    
    if(loading) return <Loader />
    return (
        <div className='container'>
            <h2 className='text-white'>DANH SÁCH PHIM</h2>
            <hr style={{ borderTopColor: 'white' }} />
            <div className='row'>
                {renderListMovie()}
            </div>
        </div>
    )
}
