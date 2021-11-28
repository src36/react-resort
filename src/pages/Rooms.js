import React from 'react';
import BgImg from '../components/BgImg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return (
        <>
          <BgImg hero="roomsBgImg" >
            <Banner title="our rooms" >
              <Link to="/" className="btn-primary">return home</Link>
            </Banner>
          </BgImg>
          <RoomsContainer />
        </>
    )
}

export default Rooms
