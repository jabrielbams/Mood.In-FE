import api from "../lib/axios";

const handleRequest = async (request) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(errorMessage);
  }
};

const API = {
  auth: {
    loginWithGoogle: (googleToken) =>
      handleRequest(api.post("/auth/google", { token: googleToken })),
  },
};

export default API;
