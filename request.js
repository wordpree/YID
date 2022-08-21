import axios from "axios";

const sendPostRequest = async (url, data, dispatch) => {
  try {
    const response = await axios.post(url, data);
    dispatch(response);
  } catch (error) {
    dispatch(error.msg);
  }
};

export default sendPostRequest;
