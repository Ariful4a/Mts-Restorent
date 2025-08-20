import axios from "axios"



const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token");
        console.log("tokenss", token);
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    // Intercepts 401 and 403 status 
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, function(error){
        const status = error.response.status;
        console.log("Error status:", status);
        // if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        //     // Handle 401 and 403 errors
        //     console.log("Unauthorized or Forbidden");
        // }
        return Promise.reject(error);
    });

    return axiosSecure;
}

export default useAxiosSecure
