import React, { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";


const RoomsContainer = () => {
  const data = useContext(RoomContext);
  const { rooms, loading, sortedRooms } = data;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={sortedRooms} />
        </div>
      )}
    </>
  );
};

export default RoomsContainer;
