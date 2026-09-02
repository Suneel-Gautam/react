import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <div className="h-30 bg-amber-100 w-full flex justify-center">
        User : {userId}
      </div>
    </>
  );
};

export default User;
