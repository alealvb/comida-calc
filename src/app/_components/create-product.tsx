"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import { api } from "~/trpc/react";

export function CreateProduct() {
  const router = useRouter();
  const [name, setName] = useState("");

  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createProduct.mutate({ name });
      }}
      className="flex flex-col gap-2"
    >
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" color="primary" disabled={createProduct.isLoading}>
        {createProduct.isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}
