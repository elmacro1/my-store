import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const data = await supabase.from("products").select();

  return Response.json(data);
}

export async function POST(request: Request) {
  const { name, price, description, color, size, image } =
    (await request.json()) as {
      name: string;
      price: number;
      description: string;
      color: string;
      size: string;
      image: string;
    };

  if (!name || !price || !description)
    return Response.json("Error, incomplete fields.", { status: 400 });

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const newProduct = {
    name,
    price,
    description,
    slug: name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, ""),
  };

  const productVariant = { ...newProduct, color, size, image };

  const { error } = await supabase.from("products").insert(newProduct);

  if (error) return Response.json(error, { status: 500 });

  return Response.json("Success, product created.", {
    status: 200,
  });
}
