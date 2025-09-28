import { IMAGE_CDN_URL } from "../../../utils/constants/constants";

export default function MovieCard({ posterPath }) {
  if (!posterPath) {
    // Shimmer UI
    return (
      <div className="w-36 md:w-48 pr-4 h-full">
        <div className="relative w-full h-full rounded-md overflow-hidden bg-gray-300/80">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
        </div>
      </div>
    );
  }
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        src={`${IMAGE_CDN_URL}/${posterPath}`}
        alt=""
        className="rounded-lg"
      />
    </div>
  );
}
