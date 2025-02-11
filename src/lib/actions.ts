"use server";

import { Product } from "@/models/product.model";
import { Categorie } from "@/models/categorie.model";
import { supabaseClient } from "./supabase/server";

export const getProducts = async (): Promise<Product[]> => {
  const supabase = await supabaseClient();

  const { data, error } = await supabase.from("products").select();

  if (error) return [];

  return data;
};

export const getCategories = async (): Promise<Categorie[]> => {
  const supabase = await supabaseClient();

  const { data, error } = await supabase.from("categories").select();

  if (error) return [];

  return data;
};
