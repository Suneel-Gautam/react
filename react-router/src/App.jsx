import "./App.css";
import Layout from "./Layout";
import Home from "./components/home/Home";
import About from "./components/about/aboutus";
import Contact from "./components/contact/Contact";
import Github from "./components/github/Github";
import User from "./components/user/User";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:userId" element={<User />} />

      <Route
        path="/github"
        element={<Github />}
        loader={async () => {
          const res = await fetch("https://api.github.com/users/suneel-gautam");
          return res.json();
        }}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
