import "./App.css";
import { UserContextProvider } from "./context/userContextProvider";
import Profile from "./components/profile";
import Loginpage from "./components/loginpage";
function App() {
  return (
    <UserContextProvider>
      <Loginpage />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
