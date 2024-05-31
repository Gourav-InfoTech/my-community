import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

interface AudioPlayerProps {
  src: string;
}

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const PlayerButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  margin-right: 5px;
  cursor: pointer;
  padding: 0;
`;

const Timeline = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 0.5rem;
  background-color: #afafaf;
  border-radius: 0.25rem;
  background-size: 0% 100%;
  background-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary)));
  background-repeat: no-repeat;
  margin-right: 0.25rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.1s;
    background-color: hsl(var(--primary));
  }

  &:hover::-webkit-slider-thumb {
    opacity: 1;
  }
`;

const SoundButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  padding: 0;
  margin-left: 5px;
`;

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const timelineRef = useRef<HTMLInputElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const timeline = timelineRef.current;

    if (!audio || !timeline) return;

    const changeTimelinePosition = () => {
      if (!audio || !timeline) return;
      const percentagePosition = (100 * audio.currentTime) / audio.duration;
      timeline.style.backgroundSize = `${percentagePosition}% 100%`;
      timeline.value = percentagePosition.toString();
    };

    const audioEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", changeTimelinePosition);
    audio.addEventListener("ended", audioEnded);
    // timeline.addEventListener("change", changeSeek);

    return () => {
      audio.removeEventListener("timeupdate", changeTimelinePosition);
      audio.removeEventListener("ended", audioEnded);
      //   timeline.removeEventListener("change", changeSeek);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const changeSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) * audio.duration) / 100;
    console.log(newTime, "newTime");
    audio.currentTime = newTime;
  };

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <Controls>
        <PlayerButton onClick={toggleAudio}>
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={"hsl(var(--primary))"}>
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={"hsl(var(--primary))"}>
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
          )}
        </PlayerButton>
        <Timeline ref={timelineRef} type="range" max="100" value="0" onChange={changeSeek} />
        <SoundButton onClick={toggleSound}>
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={"hsl(var(--primary))"}>
              <path
                fill-rule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={"hsl(var(--primary))"}>
              <path
                fill-rule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </SoundButton>
      </Controls>
    </div>
  );
};

export default AudioPlayer;
