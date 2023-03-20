const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => {
        return <div key={result.id}>{result.title}</div>;
      })}
    </div>
  );
};

export default Results;
