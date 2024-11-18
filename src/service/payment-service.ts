import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function fetchPayments(token: string) {
  const { data } = await axios.get(`${apiUrl}/payments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
}

const paymentService = {
  fetchPayments,
};

export default paymentService;