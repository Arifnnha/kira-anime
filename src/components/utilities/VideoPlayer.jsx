"use client";

import { ArrowUp, X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-3 mb-1 right-3 transition-all">
        {videoError && (
          <div className="absolute top-8 left-0 right-0 bg-color-accent text-color-primary text-center py-2 rounded-sm fade-in">
            Video is broken, please try another.
          </div>
        )}
        <button
          className="text-color-primary hover:text-color-dark float-right bg-color-dark hover:bg-color-primary py-1 px-2 mr-2 rounded-sm transition-all transform ease-in-out fade-in duration-500 hover:scale-105 opacity-100"
          onClick={handleVideoPlayer}
        >
          <X size={24} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={handleVideoError}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        className="text-color-dark hover:text-color-primary float-right bg-color-primary hover:bg-color-dark py-1 px-2 mr-2 rounded-sm transition-all transform ease-in-out fade-in duration-500 hover:scale-105 opacity-100"
        onClick={handleVideoPlayer}
      >
        <ArrowUp size={24} />
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
