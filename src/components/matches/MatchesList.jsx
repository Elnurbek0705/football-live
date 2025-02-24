import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodayMatches } from "../../redux/slices/matchesSlice";

const MatchesList = () => {
  const dispatch = useDispatch();
  const { todayMatches, loading, error } = useSelector((state) => state.matches);

  useEffect(() => {
    dispatch(fetchTodayMatches());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Todays Matches</h2>
      <ul>
        {todayMatches.map((match) => (
          <li key={match.id}>
            {match.homeTeam.name} vs {match.awayTeam.name} - {match.utcDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesList;
