import {getAllDaysOptions} from "../../models/days-options.model.js";

async function httpGetAllDaysOptions(req, res) {
  const daysOptions = await getAllDaysOptions()
  return res.status(200).json(daysOptions)
}

export {httpGetAllDaysOptions}
