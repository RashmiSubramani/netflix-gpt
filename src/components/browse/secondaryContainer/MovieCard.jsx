import { IMAGE_CDN_URL } from "../../../utils/constants";

export default function MovieCard({ posterPath }) {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={`${IMAGE_CDN_URL}/${posterPath}`} alt="" />
    </div>
  );
}
