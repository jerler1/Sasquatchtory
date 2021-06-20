import axios from "axios";

const api = {
  getProfiles() {
    return axios.get("http://localhost:3001/api/profile/");
  },
  getProfileById(id) {
    return axios.get("http://localhost:3001/api/profile/" + id);
  },
  updateProfile(id, profileData) {
    return axios.put(`http://localhost:3001/api/profile/${id}`, profileData);
  },
  makeFactory(form) {
    return axios.post("http://localhost:3001/api/factory", form);
  },
};

export default api;
