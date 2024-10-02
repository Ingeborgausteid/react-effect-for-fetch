function PublicationHistoryList({historyList}) {
  return (
    <ul>
        {historyList.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
  );
}

export default PublicationHistoryList;
