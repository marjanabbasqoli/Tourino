import api from "../core/configs/api";

const getProfile = () => api.get("user/profile");

export { getProfile };
