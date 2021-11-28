import React from 'react'

const Banner = ({title,subtitle,children}) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children} 
            {/* link as a childeren */}
        </div>
    )
}

export default Banner
