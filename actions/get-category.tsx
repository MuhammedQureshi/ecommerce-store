import { Category } from "@/types";

const API_URL="http://localhost:3000/api/cfdf18cb-ae85-4d73-9928-1ecdee198f48//categories";

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${API_URL}/${id}`);

  return res.json();
};

export default getCategory;
