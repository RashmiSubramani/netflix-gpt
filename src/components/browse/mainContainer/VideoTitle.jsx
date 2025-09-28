export default function VideoTitle({ title, overview, posterPath }) {
  return (
    <div className="text-white pt-[60%] md:pt-[10%] px-6 md:px-12 absolute top-0 left-0 bg-gradient-to-r from-black w-screen aspect-video ">
      <img
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt="movie"
        className="w-52 mb-4 rounded-lg hidden md:inline-block"
      />
      <h1 className="text-2xl md:text:4xl font-bold mb-2">{title}</h1>
      <p className="text-md w-1/4 mb-4 hidden md:inline-block">{overview}</p>
      <div className="flex gap-4">
        <button className="text-black bg-white  rounded-lg font-bold text-lg md:text-xl flex items-center gap-1 md:gap-2 hover:bg-opacity-80 px-3 md:px-12 py:1 md:py-4">
          <i className="fa fa-play" />
          Play
        </button>
        <button className="text-white bg-gray-400 p-4 rounded-lg font-bold text-xl px-12 bg-opacity-50 hover:bg-opacity-80 hidden md:inline-block">
          <i className="fa fa-info-circle mx-2" />
          More Info
        </button>
      </div>
    </div>
  );
}
