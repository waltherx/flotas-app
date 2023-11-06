"use client"

import Lottie from "lottie-react";
import traveler from "./traveler.json";

export default function TravelerAnimation() {
  return <Lottie animationData={traveler} loop />;
}
