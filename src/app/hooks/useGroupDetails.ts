import { useLocation } from 'react-router-dom';
import { GroupDetails } from '../../types';
import useFetch from './useFetch';

function useGroupDetails(): {
  groupDetails: GroupDetails | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const query = new URLSearchParams(useLocation().search);
  const groupname = query.get('groupname');

  const {
    data: groupDetails,
    isLoading,
    errorMessage,
  } = useFetch<GroupDetails>(`/api/groups/${groupname}`);

  return { groupDetails, isLoading, errorMessage };
}

export default useGroupDetails;
