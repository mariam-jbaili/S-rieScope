const api = axios.create({
    baseURL: "https://seriescope-api.vercel.app/api",
    timeout: 8000,
    headers: {
        "X-Learner": "M.Jbaili"
    }
});
export default api;