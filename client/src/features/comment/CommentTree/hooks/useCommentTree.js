// features/comment/CommentTree/hooks/useCommentTree.js

import { useInfiniteQuery } from "@tanstack/react-query";
import { getComments } from "../api/commentTree.api";

export default function useCommentTree(campSlug) {
  return useInfiniteQuery({
    queryKey: ["comments", campSlug],

    queryFn: ({ pageParam = null }) =>
      getComments({
        campSlug,
        cursor: pageParam,
      }),

    initialPageParam: null,

    getNextPageParam: (lastPage) => lastPage.meta?.nextCursor ?? undefined,
  });
}
