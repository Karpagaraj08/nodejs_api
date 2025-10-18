import sql from 'mssql';
import { sqlConfig } from '../config/dbconfig.js';
import { Response } from '../models/response.model.js';

async function getPremiumConfig(req, res) {
  try {
    const pool = await sql.connect(sqlConfig);
    const request = pool.request();
    console.log("Request Body: ", req.body);
    if (req.body.Filter != null) {
      for (const key in req.body.Filter) {
        if (Object.prototype.hasOwnProperty.call(req.body.Filter, key)) {
          const element = req.body.Filter[key];
          request.input(key, element);
        }
      }
    }
    const result = await request.execute('GetPremiumConfigs');
    if (result.rowsAffected == 0) {
      res.json({
        Premiumconfig: [],
        Response: new Response('Failed', '333', 'GetPremiumConfig', "no Data Found")
      });
    }
    res.json({
      Response: new Response(
        'success',
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