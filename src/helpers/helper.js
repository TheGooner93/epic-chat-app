const getChatServerUrl = () => {
  const localUrl = "http://localhost:5000";
  console.log(process.env);
  return process.env.CHAT_SERVICE_URL ? process.env.CHAT_SERVICE_URL : localUrl;
};

export const helper = {
  getChatServerUrl
};
