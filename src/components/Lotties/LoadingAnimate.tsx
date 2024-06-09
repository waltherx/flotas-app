"use client";

import Lottie from "lottie-react";
import loading from "./loading.json";

export default function LoadingAnimate() {
  return <Lottie animationData={loading} loop/>;
}
