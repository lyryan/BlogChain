const express =  require('express');
const sql = require('mssql')

const router = new express.Router();

router.get('/:name', async (req, res, next) => {
  try {
    const request = new sRequest();
    request.input('name', req.params.id);
    const dataset = await request.query(`
      SELECT * from [articles] WHERE name = @name
    `);
    if (dataset.length) {
      res.send(dataset);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

export default router;