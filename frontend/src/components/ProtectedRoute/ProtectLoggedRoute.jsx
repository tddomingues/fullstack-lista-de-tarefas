import { useEffect } from "react";

//redux
import { useSelector } from "react-redux";

//router
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  return children;
};

export default ProtectedRoute;
