import { api } from "./axios";
export const processNames = async (names) => {
  const res = await api.post("/process", { names });
  return res.data;
};

export const getAllLeads = async () => {
  const res = await api.get("/all");
  return res.data;
};
