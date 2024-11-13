import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;

async function loginAndGetUserData() {
  if (!apiUrl || !username || !password) {
    throw new Error(
      "Missing environment variables for API URL or credentials."
    );
  }
  const { data } = await axios.post(`${apiUrl}/auth/login`, {
    username,
    password,
  });
  if (!data?.data?.token) throw new Error("Token is missing in the response.");
  return data.data;
}

const authService = {
  loginAndGetUserData,
};

export default authService;
