import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function fetchContracts(token: string) {
  const { data } = await axios.get(`${apiUrl}/contracts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
}

const contractsService = {
    fetchContracts,
};

export default contractsService;
