import React from 'react'
import { Link } from 'react-router-dom';
export default function RapPhim(props) {
  const { cinema } = props;
  // console.log(cinema)
  return (
    <div>
      <div className="card border-link mx-auto" style={{ width: 150 }}>
        <Link to={`/detail`}><img className="card-img-top" src={cinema.logo} alt='' /></Link>
      </div>
    </div>
  )
}
