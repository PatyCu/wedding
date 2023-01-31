const GiftContribution = ({ handleAccepted }) => (
  <div className="mt-6">
    Accepted Contribution
    <form
      onSubmit={handleAccepted}
    >
      <button className="rounded-lg bg-black p-2 text-white hover:bg-gold">
        Cancel
      </button>
    </form>
  </div>
);

export default GiftContribution;
