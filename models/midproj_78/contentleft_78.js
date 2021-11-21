const db = require('../../utils/database');

const contentleft_78 = class contentleft_78 {
  constructor(id, name, bookname, remote_url, link_url, contant) {
    this.id = id;
    this.name = name;
    this.bookname = bookname;
    this.remote_url = remote_url;
    this.link_url = link_url;
    this.contant = contant;
  }

  // get all categories
  static async fetchAll() {
    try {
      const results = await db.query(`SELECT * from category_78`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  static async fetchCatIdByName(name) {
    try {
      const results = await db.query(
        `select id from category_78 where name = $1 `,
        [name]
      );
      return results.rows[0].id;
    } catch (err) {
      console.log(err);
    }
  }
};

/*const test = async () => {
  let results = await contentleft_78.fetchAll();
  console.log('results', JSON.stringify(results.rows));
};

test();*/
module.exports = contentleft_78;
