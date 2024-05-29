import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
    baseURL: `${process.env.REACT_APP_LOCAL_BACKEND_URL}/api`,
    headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
=======
    baseURL: `${process.env.REACT_APP_BACKEND_PROXY}/api`,
    headers: {
        "Content-Type": "application/json",
>>>>>>> ecc2a8eaa653965a4f9e3b58837dbb4760f450a4
    },
});
/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
    (request) => {
        console.log("Starting Request", request);
        return request;
    },
    function (error) {
        console.log("REQUEST ERROR", error);
<<<<<<< HEAD
        console.log("asdf");
=======
>>>>>>> ecc2a8eaa653965a4f9e3b58837dbb4760f450a4
    }
);

api.interceptors.response.use(
    (response) => {
        console.log("Response:", response);
        return response;
    },
    function (error) {
        error = error.response.data;
        console.log("RESPONSE ERROR", error);
        return Promise.reject(error);
    }
);

export default api;
