const Card = ({ name = "card" }) => {
  return (
    <div className="border border-amber-400  w-40 rounded-sm p-2">
      <h1>{name} cart</h1>
    </div>
  );
};

export default Card;
