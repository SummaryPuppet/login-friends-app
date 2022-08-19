import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginContextProvider } from "./context/LoginProvider";
import AddFriendPage from "./pages/AddFriend";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sigin from "./pages/Signin";

function App() {
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sigin" element={<Sigin />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/add-friends" element={<AddFriendPage />} />
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
