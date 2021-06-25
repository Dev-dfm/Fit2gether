import { GroupCard } from '../../types';
import useFetch from './useFetch';

function useGroupCards(): {
  groupCards: GroupCard[] | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: groupCards, isLoading, errorMessage } = useFetch<GroupCard[]>(
    '/api/groups'
  );

  return { groupCards, isLoading, errorMessage };
}

export default useGroupCards;
