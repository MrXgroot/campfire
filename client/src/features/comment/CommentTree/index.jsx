import Comment from "./component/Comment";
import CommentTreeEmpty from "./component/TreeEmpty";
import CommentTreeLoader from "./component/TreeLoader";
import CommentTreeError from "./component/TreeError";
import useCommentTreeController from "./hooks/useCommentTreeController";

export default function CommentTree({ campSlug }) {
  const {
    comments,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    loadMore,
    retry,
  } = useCommentTreeController(campSlug);

  if (isLoading) {
    return <CommentTreeLoader />;
  }

  if (isError) {
    return <CommentTreeError error={error} onRetry={retry} />;
  }

  if (!comments.length) {
    return <CommentTreeEmpty />;
  }

  return (
    <div className="mt-2 divide-y divide-[#1D2126]">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      {hasNextPage && (
        <div className="py-4 flex justify-center">
          <button onClick={loadMore} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
