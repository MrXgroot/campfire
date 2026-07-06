// features/comment/CommentTree/api/commentTree.api.js

import api from "../../../../api/api";

export const getComments = async ({ campSlug, cursor = null }) => {
  const { data } = await api.get(`/camps/${campSlug}/comments`, {
    params: {
      cursor,
      limit: 20,
    },
  });

  return data;
};
