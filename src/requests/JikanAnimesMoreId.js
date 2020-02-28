import Axios from "axios";

const URL = "https://api.jikan.moe/v3";

export default async function(id, request) {
  return await Axios.get(`${URL}/anime/${id}/${request}`);
}
