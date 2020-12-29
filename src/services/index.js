import axios from "axios";

const limit = 10;
const URL = `https://picsum.photos/v2/list?page=1&limit=${limit}`;

export const getList = async () => {
  try {
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
