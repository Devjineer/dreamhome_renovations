import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://dreamhome-backend.onrender.com/api/v1",
});

const makeRequest = async ({ ...reqConfig }) => {
  const onSucess = (res) => res;
  const onError = (err) => {
    throw new Error(err);
  };
  return customAxios(reqConfig).then(onSucess).catch(onError);
};

export default makeRequest;
