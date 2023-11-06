"use client";

import Lottie from "lottie-react";
import parcel from "./parcel.json";

export default function ParcelAnimation() {
  return <Lottie animationData={parcel} loop />;
}
