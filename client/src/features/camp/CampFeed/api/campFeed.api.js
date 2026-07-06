import api from "../../../../api/api";

export async function getCampFeed(params = {}) {
  const { data } = await api.get("/api/camps", {
    params,
  });

  return data;
}
