import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();
  if (!session?.user)
    return (
      <div className="container grid grid-cols-4 gap-12 px-4 py-16">
        holi logueate
      </div>
    );

  return redirect("/products");
}
