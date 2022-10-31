import { useQuery } from "@tanstack/react-query"

export interface User {
  id: string;
  name: string;
}

export const useUserQuery = () => {
  const api = (): Promise<Array<User>> => fetch('https://jsonplaceholder.typicode.com/users').then((x) => x.json());
  return useQuery(
    [],
    async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      const users = await api();
      return users;
    },
  );
}
