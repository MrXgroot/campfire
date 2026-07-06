// features/comment/CommentTree/hooks/useCommentTreeController.js

import useCommentTree from "./useCommentTree";

export default function useCommentTreeController(campSlug) {
  const query = useCommentTree(campSlug);

  const comments =
    query.data?.pages.flatMap((page) => page.data.comments) ?? [];

  return {
    comments,

    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,

    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,

    loadMore: query.fetchNextPage,
    retry: query.refetch,
  };
}
