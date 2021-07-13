import React from 'react'
import {Link} from 'react-router-dom'
export default function Card(props) {
    return (
        <div>
         <Link className='card-link' to={props.path}>
                <div className="card mb-5 pt-2 bg-transparent">
                        <h5 className="card-title card-text-edited fs-3 mb-1">{props.title}</h5>
                  <div className="row mx-auto col-8 mb-0">
                    <div className="mt-1">
                      <img
                        src={props.imagePath}
                        className="img-fluid rounded-start ms-3"
                        alt={props.title}
                      />
                      <br></br>
                      <br></br>
                      <br></br>
                     
                    </div>
                    <div className="">
                      <div className="card-body">
                        <p className="card-text card-text-edited text-center fs-4">
                        {props.description}
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
                </Link>   
        </div>
    )
}
