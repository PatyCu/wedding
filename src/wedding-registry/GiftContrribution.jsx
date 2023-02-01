const GiftContribution = ({ handleAccepted }) => (
  <div className="mt-6">
    Accepted Contribution
    <button
      className="rounded-lg bg-black p-2 text-white hover:bg-gold"
      type="button"
      onClick={handleAccepted}
    >
      Cancel
    </button>
  </div>
);

export default GiftContribution;
