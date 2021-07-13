import React from 'react'

export default function Testimonials(props) {
    return (
        <div className="card col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8 bg-dark mx-2 my-2" >
        <img src={props.imagePath} className="test-avatar mx-2 mt-2" alt="avatar"/>
        <div className="card-body">
          <p className="card-text test-font-title">{props.title}</p>
          <p className='text-muted'>{props.author}</p>
        </div>
      </div>
    )
}
