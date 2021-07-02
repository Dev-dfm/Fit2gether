import { GroupDetails } from '../../types';
import useFetch from './useFetch';

function useGroupDetails(
  query: string | null
): {
  groupDetails: GroupDetails | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const {
    data: groupDetails,
    isLoading,
    errorMessage,
  } = useFetch<GroupDetails>(`/api/groups/${query}`);

  return { groupDetails, isLoading, errorMessage };
}

export default useGroupDetails;
