import { Group } from '../types';

export async function postGroup(group: Group): Promise<Group> {
  const response = await fetch('/api/groups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(group),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: Group = await response.json();
  return result;
}
