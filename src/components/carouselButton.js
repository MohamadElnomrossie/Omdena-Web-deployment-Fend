import React from 'react'

export default function CarouselButton(props) {
    return (
        <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={props.index}
                aria-label={props.slideName}
              ></button>
    )
}
