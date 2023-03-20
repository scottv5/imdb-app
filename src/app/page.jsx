import Results from "@/components/Results.component";

const apiKey = process.env.TMDB_API_KEY;

const getUrl = (genre) => {
  let slug;
  if (genre === "fetchTrending") slug = `trending/movie/week?api_key=${apiKey}`;
  if (genre === "fetchTopRated") slug = `movie/top_rated?api_key=${apiKey}`;

  return "https://api.themoviedb.org/3/" + slug;
};

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(getUrl(genre), { next: { revalidate: 43200 } });

  if (!res.ok) throw Error("failed to fetch response from api");

  const data = await res.json();

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
};

export default Home;
