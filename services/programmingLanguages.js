const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM u280636814_nexelit.admins LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(programmingLanguage){
  const result = await db.query(
    `INSERT INTO brands (id, title, url, image, created_at, updated_at) VALUES 
    (15, "", " ", " ", " ", " ")`
  );
  const data = result.affectedRows;
  const meta = programmingLanguage;
  const SQLAll = result;

  return {
    data,
    meta,
    SQLAll
  }
  
}

module.exports = {
  getMultiple,
  create
}