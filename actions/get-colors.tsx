import { Color } from "@/types";

const API_URL="http://localhost:3000/api/cfdf18cb-ae85-4d73-9928-1ecdee198f48//colors";

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(API_URL);

  return res.json();
};

export default getColors;

