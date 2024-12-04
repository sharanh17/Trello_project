import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Dashboard from "./assets/components/Darshboard";
import BoardDetails from "./assets/components/BoardDetails";
import { ApiContext } from "./assets/components/context/apiContext";
import { Provider } from "react-redux";
import store from "./assets/Store/store";

const API_KEY = import.meta.env.VITE_APP_TRELLO_KEY;
const TOKEN = import.meta.env.VITE_APP_TOKEN;

function App() {
  return (
    <Provider store={store}>
      <ApiContext.Provider value={{ API_KEY, TOKEN }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/board/:boardId" element={<BoardDetails />} />
          </Routes>
        </Router>
      </ApiContext.Provider>
    </Provider>
  );
}

export default App;
