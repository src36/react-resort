import React from 'react';
import BgImg from '../components/BgImg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


const Home = () => {
    return (
        <>
            <BgImg >
                <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting At $299">
                     <Link to="/rooms" className="btn-primary">
                    our Rooms
                     </Link>
                </Banner>
            </BgImg>
            <Services />
            <FeaturedRooms />
            
        </>
    )
}

export default Home
