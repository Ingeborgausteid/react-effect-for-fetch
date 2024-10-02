function FavouriteSlipsList({ favourites }) {
  return (
    <ul>
      {favourites.map((slips, i) => (
        <li key={i}>{slips}</li>
      ))}
    </ul>
  );
}

export default FavouriteSlipsList
