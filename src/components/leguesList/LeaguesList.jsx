import { useEffect, useState } from "react";
import { getLeagues } from "../../services/api"; // API chaqiruvini import qilish

const LeaguesList = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const data = await getLeagues();
        console.log("Ligalar ro‘yxati:", data); // 🔥 API dan kelgan datani tekshirish
        setLeagues(data.competitions); // API dan kelayotgan competitions massivini saqlash
      } catch (error) {
        console.error("Ligalar yuklanmadi:", error);
      }
    };

    fetchLeagues();
  }, []);

  return (
    <div>
      <h2>Ligalar Ro‘yxati</h2>
      <ul>
        {leagues.map((league) => (
          <li key={league.id}>{league.name} ({league.area.name})</li>
        ))}
      </ul>
    </div>
  );
};

export default LeaguesList;
