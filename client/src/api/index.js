import axios from "axios";

const api = {
    getProfiles() {
        return axios.get("http://localhost:3001/api/profile/");
    },
    makeFactory(form) {
        return axios.post("http://localhost:3001/api/factory", form).then(({data}) => data);
    }
};

export default api;