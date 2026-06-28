import api from "../../../api/api";
export async function getCamps(params = {}) {
  const { data } = await api.get("/api/camps", { params });
  console.log(data);
  return data;
}

export async function getCampBySlug(slug) {
  const { data } = await api.get(`/api/camps/${slug}`);

  return data;
}

export async function createCamp(campData) {
  const { data } = await api.post("/api/camps", campData);

  return data;
}

export async function updateCamp(campId, campData) {
  const { data } = await api.patch(`/api/camps/${campId}`, campData);

  return data;
}

export async function archiveCamp(campId) {
  const { data } = await api.delete(`/api/camps/${campId}`);

  return data;
}
