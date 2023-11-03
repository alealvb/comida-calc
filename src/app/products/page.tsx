import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { capitalize } from "~/lib/capitalize";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function ProductsPage() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;
  const products = await api.product.list.query();

  return (
    <div className="container grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col gap-2">
          <CardHeader>
            <CardTitle className="text-center">
              {capitalize(product.name)}
            </CardTitle>
            <CardDescription>{product.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              {/* <TableCaption>Product details</TableCaption> */}
              <TableHeader>
                <TableRow>
                  {/* <TableHead className="w-[100px]"></TableHead>
                  <TableHead className="text-right"></TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Calories</TableCell>
                  <TableCell className="text-right">
                    {product.calories ?? "-"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Carbs</TableCell>
                  <TableCell className="text-right">
                    {product.carbs ?? "-"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fat</TableCell>
                  <TableCell className="text-right">
                    {product.fat ?? "-"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fiber</TableCell>
                  <TableCell className="text-right">
                    {product.fiber ?? "-"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
