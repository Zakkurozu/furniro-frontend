import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

const ProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    nProgress.start();
    setTimeout(() => {
      nProgress.done();
    }, 500);
  }, [location]);

  return null;
};

export default ProgressBar;
