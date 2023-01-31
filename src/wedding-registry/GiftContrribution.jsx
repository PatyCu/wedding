import { useNavigate } from "react-router-dom";

const GiftContribution = ({ id, setAcceptedContribution }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-6">
      Accepted Contribution
      <form
        onSubmit={() => {
          //e.preventDefault();
          //   navigate("/gift/".concat(id));
          setAcceptedContribution(false);
        }}
      >
        <button className="rounded-lg bg-black p-2 text-white hover:bg-gold">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default GiftContribution;
