import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { CreateProduct } from "./_components/create-product";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <CrudShowcase />
    </div>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.product.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreateProduct />
    </div>
  );
}
