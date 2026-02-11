import { getServerSession } from "next-auth";

export default async function Home() {

  const session = await getServerSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {JSON.stringify(session, null, 2)}
    </div>
  );
}
