// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const UseMenu =() => {
  const axiosPublic = useAxiosPublic();
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
