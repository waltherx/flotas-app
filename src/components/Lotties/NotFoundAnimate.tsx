"use client"

import Lottie from "lottie-react";
import notFound from "./not-found.json";

export default function NotFoundAnimate() {
  return <Lottie animationData={notFound} loop />;
}
