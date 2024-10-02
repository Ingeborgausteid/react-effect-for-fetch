function AdviceSlip({ onSave, onGetMore, adviceSlip: { slip } }) {

  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{slip?.advice}</p>
      <button onClick={onGetMore}>Get More Advice</button>
      <button onClick={onSave}>Save to Favourties</button>
    </section>
  );
}

export default AdviceSlip
