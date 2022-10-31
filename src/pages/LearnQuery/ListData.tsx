import { Suspense } from "react";
import { useUserQuery } from "hooks/users";

export function ListData() {
  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        <Suspense fallback={<h1>loading...</h1>}>
          <Contents />
        </Suspense>
      </div>
    </div>
  );
}

function Contents() {
  const users = useUserQuery();

  return (
    <>
      {users.data?.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}
