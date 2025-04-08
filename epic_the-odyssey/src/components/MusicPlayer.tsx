import React, { useState, useRef, useEffect } from "react";
import { Saga } from "../types/saga";
import "./MusicPlayer.css";

interface MusicPlayerProps {
  selectedSaga: Saga;
}

export function MusicPlayer({ selectedSaga }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState(
    selectedSaga.audioTracks[0]?.id
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = selectedSaga.audioTracks.find(
    (track) => track.id === currentTrackId
  );

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setCurrentTrackId(selectedSaga.audioTracks[0]?.id);
  }, [selectedSaga]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTrackSelect = (trackId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentTrackId(trackId);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="music-player" onClick={(e) => e.stopPropagation()}>
      <div className="track-list">
        {selectedSaga.audioTracks.map((track) => (
          <button
            key={track.id}
            className={`track-button ${
              currentTrackId === track.id ? "active" : ""
            }`}
            onClick={(e) => handleTrackSelect(track.id, e)}
          >
            {track.title}
          </button>
        ))}
      </div>

      {currentTrack && (
        <div className="player-controls">
          <div className="time-display">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>

          <div className="controls-row">
            <div className="controls-group">
              <button
                className="play-button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <div className="volume-control">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                />
              </div>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={currentTrack.path}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      )}
    </div>
  );
}
