import sql from 'mssql';
import { sqlConfig } from '../config/dbconfig.js';
import { Response } from '../models/response.model.js';

async function getPremiumConfig(req, res) {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query('SELECT * FROM premiumconfig');
    if (result.recordset.length == 0) {
      res.json({
        Premiumconfig: [],
        Response: new Response('Failed', '333', 'GetPremiumConfig', "no Data Found")
      });
    }
    res.json({
      Response: new Response('success',
        '111',
        'GetPremiumConfig',
        "Data fetching successfully completed",
        "",
        null),
      Premiumconfig: result.recordset
    });
  } catch (err) {
    console.error(err);
    res.json({
      Premiumconfig: [],
      Response: new Response('Failed', '999', 'GetPremiumConfig', err.message)
    });
  } finally {
    sql.close();
  }
}


export { getPremiumConfig }