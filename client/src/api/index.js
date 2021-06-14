import axios from "axios";

const api = {
    getProfiles() {
        return axios.get("http://localhost:3001/api/profile/");
    }
};

export default api;