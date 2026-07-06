import useCampFeed from "./useCampFeed";

export default function useCampFeedController(params = {}) {
  const query = useCampFeed(params);

  return {
    camps: query.data?.data?.camps ?? [],

    isLoading: query.isPending,
    isError: query.isError,
    error: query.error,

    retry: query.refetch,
  };
}
