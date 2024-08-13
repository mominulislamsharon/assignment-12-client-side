import { useEffect, useState } from "react";



const UseMenu =() => {
  const [popularTours, setPopularTours] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    fetch("menu.json")
    .then(res => res.json())
    .then(data => {
      setPopularTours(data);
      setLoading(false);
    });
  },[]);
  return [popularTours, loading];
  
}

export default UseMenu;
