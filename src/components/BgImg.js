import React from 'react'

const BgImg = ({children,hero}) => {
    return (
        <header className={hero}>
            {children}
            {/* banner as a children  */}
        </header>
    )
}

BgImg.defaultProps = {
    hero: "defaultBgImg"
};

export default BgImg
