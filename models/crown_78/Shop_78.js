const db = require('../../utils/database');

const Shop_78 = class Shop_78 {
  constructor(id, name, cat_id,price, remote_url, local_url) {
    this.id = id;
    this.name = name;
    this.cat_id = cat_id;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  static async create(body) {
    const {id,name,cat_id,price,remote_url,local_url} =body;
    const query ={
      text:`INSERT INTO shop_78 (id,name,cat_id,price,remote_url,local_url) VALUES ($1,$2,$3,$4,$5,$6)`,
      values:[id,name,cat_id,price,remote_url,local_url]
  }
    return db.query(query);
  }

  // get all categories
  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * from shop_78`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  static async fetchByCatId(id){
    const query ={
        text:`select * from shop_78 where cat_id = $1;`,
        values:[id]
    }
    try{
        const results = await db.query(query)
        return results.rows;
    }catch(err){
        console.log(err);
    }
  }

  static async updateById(body) {
    const {id, name, cat_id, price, remote_url, local_url} =body;
    const query ={
      text: 'UPDATE shop_78 SET name = $1, cat_id = $2, price = $3, remote_url = $4, local_url = $5 WHERE id =$6',
      values: [name, cat_id, price, remote_url, local_url ,id ]
  }
    return db.query(query);
  }

};

// const test = async () => {
//   let results = await Category_xx.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// }

// test();
module.exports = Shop_78;