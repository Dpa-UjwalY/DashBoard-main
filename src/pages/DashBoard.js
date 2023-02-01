import { useEffect, useState } from "react";
import { NavLink, Spinner } from "react-bootstrap";
import { Ito } from "../dashboard/Ito";

export const DashBoard = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div >
      {
        loading ? 
        (<div className="spin" ><Spinner animation="grow" variant="dark" /></div> ):
        (<div></div>)
      }
    </div>
  );
};
