import api from "../../../../../api/api";
export async function getCampDetails(campSlug) {
  const { data } = await api.get(`/api/camps/${campSlug}`);
  console.log(data);
  return data.data;
}
export async function upvoteCamp(campSlug) {
  const { data } = await api.post(`/api/camps/${campSlug}/upvote`);

  return data.data;
}
