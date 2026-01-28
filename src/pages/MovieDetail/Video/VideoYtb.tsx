import type { VideoYtbProps } from "./libs/types";

const VideoYtb = ({ videoData }: VideoYtbProps) => {
  const vdData = videoData.slice(0, 5);
  
  if (vdData.length === 0) {
    return null; 
  }
  
  return (
    <div>
      {vdData.map((videodt) => (
        <div className="mt-12 aspect-video px-5 md:px-18" key={videodt.id}>
          {/* ✅ Dùng videodt.id thay vì index */}
          <p className="mb-3 text-base xl:text-2xl font-medium">
            {videodt.name}
          </p>
          <iframe
            src={`https://www.youtube.com/embed/${videodt.key}`}
            title={videodt.name}
            className="w-full h-full object-contain rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
};

export default VideoYtb;