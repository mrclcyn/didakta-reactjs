import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Defaultsite = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return <></>;
};

export default Defaultsite;