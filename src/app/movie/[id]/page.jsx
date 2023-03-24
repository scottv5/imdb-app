import Image from "next/image";

const getMovie = async (movieId, apiKey) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  ).then((res) => res.json());
};

const MoviePage = async ({ params }) => {
  const movie = await getMovie(params.id, process.env.TMDB_API_KEY);
  const {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = movie;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width={500}
          height={100}
          placeholder="blur"
          blurDataURL="/loading-animation.svg"
          className="rounded-lg"
        />

        <div className="p-2">
          <h2 className="text-xl mb-3 font-bold">{title}</h2>
          <div className="text-lg mb-3">
            <span className="font-semibold mr-2 border-amber-600 border-b-2 border-dashed">
              Description:
            </span>
            {overview}
          </div>

          <div className="text-lg mb-3">
            <span className="font-semibold mr-2 border-amber-600 border-b-2 border-dashed">
              Date Released:
            </span>
            {release_date}
          </div>

          <div className="text-lg mb-1 flex space-x-6">
            <div>
              <span className="font-semibold mr-2 border-amber-600 border-b-2 border-dashed">
                Rating:
              </span>
              {vote_average}
            </div>

            <div>
              <span className="font-semibold mr-2 border-amber-600 border-b-2 border-dashed">
                Vote Count:
              </span>
              {vote_count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
