import axios from "axios";

const api = {
  getProfiles() {
    return axios.get("/api/profile/");
  },
  getProfileById(id) {
    return axios.get("/api/profile/" + id);
  },
  updateProfile(id, profileData) {
    return axios.put(`/api/profile/${id}`, profileData);
  },
  clearFactories(id) {
    return axios.put(`/api/profile/${id}/clear`);
  },
  makeFactory(form) {
    return axios.post("/api/factory", form);
  },
};

export default api;
