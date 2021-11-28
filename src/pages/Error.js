import React from 'react';
import BgImg from '../components/BgImg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <>
            <BgImg >
                <Banner title="404" subtitle="page not found">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </BgImg>
        </>
    )
}

export default Error
