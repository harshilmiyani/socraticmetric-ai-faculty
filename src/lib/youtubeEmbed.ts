/** Params appended to youtube.com/embed/{id} for consistent playback. */
export const YOUTUBE_EMBED_PARAMS = new URLSearchParams({
  autoplay: "1",
  rel: "0",
  modestbranding: "1",
  playsinline: "1",
  enablejsapi: "1",
});

export function youtubeThumbnailUrl(
  id: string,
  quality: "maxresdefault" | "hqdefault" | "mqdefault",
) {
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
}

export function youtubeEmbedSrc(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?${YOUTUBE_EMBED_PARAMS.toString()}`;
}
