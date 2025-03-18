import React from "react";
import Heading from "../components/common/Heading";
import BookChecks from "../components/home/BookCheck";

export default function BookCheckPage() {
  return (
    <>
      <Heading heading="BookCheck" title="Home" subtitle="BookCheck" />
      <BookChecks />
    </>
  );
}
