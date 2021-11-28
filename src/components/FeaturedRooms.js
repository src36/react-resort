import React, { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

const FeaturedRooms = () => {
  const data = useContext(RoomContext);
  const { loading, featuredRooms } = data;
  

  return (
    <section className="featured-rooms">
      <Title titleName="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          featuredRooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })
        )}
      </div>
    </section>
  );
};

export default FeaturedRooms;
