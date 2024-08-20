import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PaymentHistory = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: payments = []} = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async() => {
      const res = await axiosSecure.get(`/payments/${user.email}`)
      return res.data;
    }
  })

  return (
    <div>
      <SectionTitle heading="PYMENT HISTORY"></SectionTitle>
      <div>
        <h1 className="text-2xl font-medium my-4">Total Payments: {payments.length}</h1>
        <div className="overflow-x-auto px-12">
  <table className="table table-zebra ">
    <thead className="bg-blue-500  text-white font-bold">
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction ID</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody className="font-medium">
      {payments.map((payment, index) => <tr key={payment._id}>
        <th>{index + 1}</th>
        <td className="text-right">${payment.price}</td>
        <td>{payment.transectionId}</td>
        <td>{payment.status}</td>
      </tr>)}
      
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default PaymentHistory;