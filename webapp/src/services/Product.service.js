import http from "../http-common";


class ProductDataService {
  getAll() {
    return http.get("/Products");
  }

  get(id) {
    return http.get(`/Products/${id}`);
  }

  create(data) {
    return http.post("/Products", data);
  }

  update(data, id) {
    return http.put(`/Products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Products/${id}`);
  }

  deleteAll() {
    return http.delete(`/Products`);
  }

  findByTitle(title) {
    return http.get(`/Products?title=${title}`);
  }
}

export default new ProductDataService();