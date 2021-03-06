const BASE_URL = "/api/posts";

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

export function create(pst) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(pst)
  }).then(res => res.json());
}

export function update(pst) {
  return fetch(`${BASE_URL}/${pst._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(pst)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  }).then(res => res.json());
}
