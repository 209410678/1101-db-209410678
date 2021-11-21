const contentleft_78 = require('../../models/midproj_78/contentleft_78');

exports.getContentleft = async (req, res) => {
  try {
    return await contentleft_78.fetchAll();
  } catch (err) {
    console.log('getcontentleft', err);
  }
};
