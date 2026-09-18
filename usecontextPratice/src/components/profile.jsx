import UserContext from "../context/usercontext";
import { useContext } from "react";
const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Login First</div>;
  return <div>Welcome {user.username}</div>;
};

export default Profile;
