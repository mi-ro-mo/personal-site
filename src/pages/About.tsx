import React, { useState } from "react";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  window.addEventListener("load", handleLoad);

  return isLoading ? (
    <></>
  ) : (
    <div className="dark-theme">
      <h1>About me</h1>
    </div>
  );
};

export default About;
