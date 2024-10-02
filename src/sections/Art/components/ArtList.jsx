import ArtListItem from "./ArtListItem";

function ArtList({ artData }) {

  return (
    <ul className="art-list">
      {artData.map((artItem, i) => (
        <ArtListItem artItem={artItem} key={i} />
      ))}
    </ul>
  );
}

export default ArtList;
