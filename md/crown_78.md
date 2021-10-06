# First One

![](https://i.imgur.com/MTOnANx.png)

**index.ejs**
```html
<body>
  <h1>
    <%= title %>
  </h1>
  <p>Welcome to
    <%= title %>
  </p>
  <h3>
    My name is
    <%= name %>
  </h3>
  <h3>
    My student id is
    <%= id %>
  </h3>
</body>
```
**index.js**
```js
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '鄭芷琳', id: '209410678' });
});
```
---

![](https://i.imgur.com/sjiDq8P.jpg)

**app.js**
```js
const crown_78_Router = require('./routes/crown_78');

app.use('/crown_78', crown_78_Router);
```
**crown_78.js**
```js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('crown_78', { title: 'Express', name: '鄭芷琳', id: '209410678' });
});

module.exports = router;
```
**crown_78.ejs**
```html
  <h3>
      <%= name %>
      <%= id %>
  </h3>
```
---
![](https://i.imgur.com/W7SCAWF.png)

---
![](https://i.imgur.com/lNVJtsb.png)

---
![](https://i.imgur.com/jKSHiHG.png)

**database.js**
```js
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_78',
    password: '0000',
    port: '5432',
})
pool.query('SELECT * from category_78', (err, res) => {
    console.log(JSON.stringify(res.rows));
    pool.end();
})

module.exports = pool;
```
---