const getChatServerUrl = () => {
  const localUrl = "http://localhost:5000";
  return process.env.NODE_ENV === 'production' ? process.env.CHAT_SERVER_URL : localUrl;
};

export const helper = {
  getChatServerUrl
};
