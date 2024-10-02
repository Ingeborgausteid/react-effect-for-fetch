import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({
  artItem: { title, artist, imageURL, publicationHistory },
}) {
  return (
    <li>
      <div className="frame">
        <img src={`https://boolean-uk-api-server.fly.dev/${imageURL}`} />
      </div>
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistoryList historyList={publicationHistory} />
    </li>
  );
}

export default ArtListItem;
