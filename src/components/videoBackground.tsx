"use client";

import React, { useEffect, useRef } from "react";

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // slower (1.0 = normal, 0.5 = half speed, 2.0 = double speed)
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
      draggable={false}
    >
      <source src="/videos/hex-motion-bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
