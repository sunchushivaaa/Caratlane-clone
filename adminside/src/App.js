import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  const { isLoading } = useSelector((store) => store);
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {isLoading && <Loading />}
      <Footer />
    </div>
  );
}

export default App;
