import React, { useState } from "react";

function Video() {
  const [isLoading, setLoading] = useState(false);
  const handleVideoError = () => {
    setLoading(true);
  };
  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-full h-full">
      {
        isLoading &&
        <div>
          <img
            src="../loading-img.jpg"
            className="h-screen object-cover w-full"
          />
        </div>
      }
      <video
        src="/video.mp4"
        loop
        autoPlay
        muted
        className="w-full h-full object-cover"
        onError={handleVideoError}
        onLoadStart={() => {setLoading(true)}}
        onLoadedData={handleVideoLoad}
      />
    </div>
  );
}

export default Video;
