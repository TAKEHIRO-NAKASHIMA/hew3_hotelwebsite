import React from "react";
import Heading from "../components/common/Heading";
import SelectRoom from "../components/home/SelectRooms";

export default function SelectRoomsPage() {
  return (
    <>
      <Heading heading="SelectRoom" title="Home" subtitle="SelectRoom" />
      <SelectRoom />
    </>
  );
}
