
import axios from 'axios';

const axiosBase = axios.create({
	baseURL: "https://forumbackend-86af.onrender.com/api",
});

export default axiosBase;
