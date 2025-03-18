import React from "react";
import Heading from "../components/common/Heading";
import ViewDetails from "../components/home/ViewDetail";

export default function ViewDetailPage() {
  return (
    <>
      <Heading heading="ViewDetail" title="Home" subtitle="ViewDetail" />
      <ViewDetails />
    </>
  );
}
