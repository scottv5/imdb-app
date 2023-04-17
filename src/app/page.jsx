import Results from "@/components/Results.component";

const apiKey = process.env.TMDB_API_KEY;
console.log({ apiKey });

const getUrl = (genre = "fetchTrending", page = 1) => {
  let slug;
  if (genre === "fetchTrending") slug = `trending/movie/week?api_key=${apiKey}`;
  if (genre === "fetchTopRated") slug = `movie/top_rated?api_key=${apiKey}`;

  return "https://api.themoviedb.org/3/" + slug + `&page=${page}`;
};

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(getUrl(genre), { next: { revalidate: 43200 } });
  const res2 = await fetch(getUrl(genre, 2), { next: { revalidate: 43200 } });
  const res3 = await fetch(getUrl(genre, 3), { next: { revalidate: 43200 } });

  if (!res.ok || !res2.ok || !res3.ok)
    throw Error("failed to fetch response from api");

  const data = await res.json();
  const data2 = await res2.json();
  const data3 = await res3.json();
  const allDataResults = [...data.results, ...data2.results, ...data3.results];

  return (
    <div>
      <Results results={allDataResults} />
    </div>
  );
};

export default Home;
