import makeRequest from "../lib/axios";

const sendMail = async (options, url = "/send-mail") => {
  const { data } = await makeRequest({ url, method: "post", data: options });
  return data
};

export default sendMail;
