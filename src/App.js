import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const routesData = [
    { path: "/", component: <Home /> },
    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> }
  ];
  return (
    <div className="App">
      <Router>
        <Routes>
          {routesData.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.component} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
