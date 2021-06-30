import { GroupCard } from '../../types';
import useFetch from './useFetch';

function useGroupCards(
  search: string,
  filter: string
): {
  groupCards: GroupCard[] | null;
  isLoading: boolean;
  errorMessage: string | null;
  refetch: () => void;
} {
  const { data: groupCards, isLoading, errorMessage, refetch } = useFetch<
    GroupCard[]
  >(`/api/groups?filter=${search}&sort_by=${filter}`);

  return { groupCards, isLoading, errorMessage, refetch };
}

export default useGroupCards;
