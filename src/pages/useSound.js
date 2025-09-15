import { useCallback } from "react";

export default function useSound(src, volume = 1) {
  const play = useCallback(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  }, [src, volume]);

  return play;
}