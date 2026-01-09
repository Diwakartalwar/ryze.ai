export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Animated particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: `rgba(${Math.random() > 0.5 ? '220, 38, 38' : Math.random() > 0.5 ? '59, 130, 246' : '147, 51, 234'}, ${Math.random() * 0.5 + 0.3})`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Optional: Uncomment to use video background */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      >
        <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video> */}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
    </div>
  );
}

