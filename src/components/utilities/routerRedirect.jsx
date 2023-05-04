import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RouterRedirect({ to, message }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  return (
    <div>
      {message}, Redirect you to "{to}"...
    </div>
  );
}

export default RouterRedirect;
