
import axios from 'axios';

const axiosBase = axios.create({
	baseURL: "https://evangadiforum-cckj.onrender.com/api",
});

export default axiosBase;
