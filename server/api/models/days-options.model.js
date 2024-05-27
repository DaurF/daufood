import {pool} from "../services/mysql.js";

async function getAllDaysOptions() {
  const [daysOptions] = await pool.query('SELECT * FROM days_options')
  return daysOptions
}

export {getAllDaysOptions}
