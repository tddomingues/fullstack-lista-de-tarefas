import { useEffect } from "react";

//redux
import { useSelector } from "react-redux";

//router
import { useNavigate } from "react-router-dom";

const ProtectNonLoggedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  console.log("user ", user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/login", { replace: true });
    }
  }, [navigate, user]);

  return children;
};

export default ProtectNonLoggedRoute;
