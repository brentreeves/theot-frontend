import http from "../http-common";

class DotsDataService {
  getAll() {
    console.log(
      "DotsDataService getAll: ",
      process,
      " process-env ",
      process.env,
      " process-env-backend ",
      process.env.BACKEND_URL
    );
    return http.get("/dots");
  }

  get(id) {
    return http.get(`/dots/${id}`);
  }

  create(data) {
    return http.post("/dots", data);
  }

  update(id, data) {
    return http.put(`/dots/${id}`, data);
  }

  delete(id) {
    return http.delete(`/dots/${id}`);
  }

  deleteAll() {
    return http.delete(`/dots`);
  }

  findByTitle(findme) {
    return http.get(`/dots?witness=${findme}`);
  }
}

export default new DotsDataService();
