import {http} from "../shared/api";

async function getDaysOptions() {
  const res = await http.get('/days-options');
  return res.data;
}

export {getDaysOptions}
