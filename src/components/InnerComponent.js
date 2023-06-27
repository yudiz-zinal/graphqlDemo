import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InnerComponent = () => {
  const { code } = useParams();
  const [date, setDate] = useState(new Date());
  console.log(code, "lcoation", date);

  useEffect(() => {
    const intervalId = setInterval(() => {
      var d = new Date();

      setDate((date) => d);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mainSection">
      {/* Header NavBar */}
      <div className="navBarSection">
        <div className="navBarWrapper">
          Code : {code}
          {/* <div className="navbar-right-section">
            <a href="#">Pojects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default InnerComponent;
