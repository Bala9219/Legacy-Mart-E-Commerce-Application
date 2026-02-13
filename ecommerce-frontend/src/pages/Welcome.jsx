import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || user.role === "ADMIN") {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, user]);

  return (
    <div className="welcome-wrapper">
      <div className="welcome-bg"></div>

      <div className="welcome-content">
        <span className="welcome-badge">LEGACY MART</span>

        <h1 className="welcome-title">
          Welcome to <br />
          <span>Legacy Mart</span>
        </h1>

        <p className="welcome-subtitle">
          Discover quality. Shop smarter.
        </p>

        <div className="welcome-progress"></div>
      </div>
    </div>
  );
};

export default Welcome;

/*🛍️*/