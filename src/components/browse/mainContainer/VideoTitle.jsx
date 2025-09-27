export default function VideoTitle({ title, overview, posterPath }) {
  return (
    <div className="text-white pt-[10%] px-12 absolute top-0 left-0 bg-gradient-to-r from-black w-screen aspect-video">
      <img
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt="movie"
        className="w-52 mb-4 rounded-lg"
      />
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-md w-1/4 mb-4">{overview}</p>
      <div className="flex gap-4">
        <button className="text-black bg-white p-4 rounded-lg font-bold text-xl px-12 flex items-center gap-2 hover:bg-opacity-80">
          <i className="fa fa-play" />
          Play
        </button>
        <button className="text-white bg-gray-400 p-4 rounded-lg font-bold text-xl px-12 bg-opacity-50 hover:bg-opacity-80">
          <i className="fa fa-info-circle mx-2" />
          More Info
        </button>
      </div>
    </div>
  );
}
