export interface AudioTrack {
  id: string;
  title: string;
  path: string;
}

export interface Saga {
  id: string;
  title: string;
  image: string;
  audioTracks: AudioTrack[];
  description: string;
  information: string;
}
