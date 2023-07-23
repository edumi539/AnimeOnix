import Axios from "axios";

const URL = "https://api.jikan.moe/v4";
const ANIME = "/anime";
const ID = 1;

export default async function () {
  return await Axios.get(`${URL}${ANIME}?limit=24`);
}
