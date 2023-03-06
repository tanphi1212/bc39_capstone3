import React from 'react';
import DSRachPhim from './DSRapPhim';
import ListMoviePage from './ListMoviePage';
export default function HomePage() {
    return (
        <div className='container'>
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='d-block  mx-auto' height={'500px'} src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png" alt="Los Angeles" />
                    </div>
                    <div className="carousel-item">
                        <img className='d-block mx-auto' height={'500px'} src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png" alt="Chicago" />
                    </div>
                    <div className="carousel-item">
                        <img className='d-block mx-auto ' height={'500px'} src="https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png" alt="New York" />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
            <ListMoviePage />
           
            <DSRachPhim />
        </div>
    )
}
