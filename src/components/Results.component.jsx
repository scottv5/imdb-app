"use client";

import Card from "./Card.component";

import { useSearchParams } from "next/navigation";

const Results = ({ results }) => {
  const searchPerams = useSearchParams();
  const genre = searchPerams.get("genre");

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto p-4">
      {results.map((result) => {
        const {
          title,
          id,
          poster_path,
          release_date,
          vote_average,
          vote_count,
        } = result;

        if (!genre || genre === "fetchTrending") {
          return (
            <Card
              key={id}
              title={title}
              image={poster_path}
              id={id}
              date={release_date}
              avgScore={vote_average}
            />
          );
        }
        if (genre === "fetchTopRated" && vote_count >= 5001) {
          return (
            <Card
              key={id}
              title={title}
              image={poster_path}
              id={id}
              date={release_date}
              avgScore={vote_average}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Results;
