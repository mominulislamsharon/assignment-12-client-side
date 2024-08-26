import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://assignment-tourist-guid-server.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;