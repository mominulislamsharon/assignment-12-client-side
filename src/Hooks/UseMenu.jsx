// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const UseMenu =() => {
  const axiosPublic = useAxiosPublic();
  // const [popularTours, setPopularTours] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() =>{
  //   fetch("http://localhost:5000/menu")
  //   .then(res => res.json())
  //   .then(data => {
  //     setPopularTours(data);
  //     setLoading(false);
  //   });
  // },[]);

  const {data: popularTours = [], isPending: loading, refetch} = useQuery({
    queryKey: [`popularTours`],
    queryFn: async() => {
      const res = await axiosPublic. get('/menu');
      return res.data;
    }
  })

  return [popularTours, loading, refetch];
  
}

export default UseMenu;
