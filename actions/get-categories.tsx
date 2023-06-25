import { Billboard } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Billboard[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;

