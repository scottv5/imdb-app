import Results from "@/components/Results.component";

const apiKey = process.env.TMDB_API_KEY;

const SearchPage = async ({ params }) => {
  //console.log({ apiKey, st: params.searchTerm });
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${params.searchTerm}&language=en-US&include_adult=false`;

  const res = await fetch(url);

  if (!res.ok) throw Error("Error fetching data");

  const movies = await res.json();
  //console.log(movies.results.map((result) => result.id));

  return (
    <div>
      {!movies.results || movies.results.length === 0 ? (
        <h2 className="max-w-6xl mx-auto px-4 text-xl font-semibold">
          No results found
        </h2>
      ) : (
        <Results results={movies.results} />
      )}
    </div>
  );
};

export default SearchPage;
