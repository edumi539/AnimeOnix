import Axios from "axios";

const URL = "https://api.jikan.moe/v3/";
const SEASONPARAMETER = "/winter";
const YEARPARAMETER = "season/2022";

export default async function() {
  return await Axios.get(`${URL}${YEARPARAMETER}${SEASONPARAMETER}`);
}
