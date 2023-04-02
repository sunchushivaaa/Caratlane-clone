import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { token } = useSelector((store) => store);
  if (token !== "") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
