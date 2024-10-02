import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const url = `https://api.adviceslip.com/advice`;
  const [adviceData, setAdviceData] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url)
    const jsonData = await response.json()
    setAdviceData(jsonData);
    console.log(jsonData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = () => {
    if (favourites.includes(adviceData.slip.advice)) return;
    else setFavourites((favourites) => [...favourites, adviceData.slip.advice]);
  };

  const handleGetMore = () => {
    fetchData();
  };

  return (
    <section>
      <h2>Advice Section</h2>

      <AdviceSlip
        onSave={handleSave}
        onGetMore={handleGetMore}
        adviceSlip={adviceData}
      />

      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <FavouriteSlipsList favourites={favourites} />
      </section>
    </section>
  );
}

export default AdviceSection;
