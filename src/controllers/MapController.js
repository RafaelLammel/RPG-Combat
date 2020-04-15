const path = require('path');

const Map = require('../models/Map');

module.exports = {

  welcome: (req, res) => {
    return res.render(path.join(__dirname, '../../', 'public', 'welcome.ejs'));
  },

  get: (req, res) => {
    let name = req.params.pageName;
    
    if(name != 'favicon.ico') {
      return res.render(path.join(__dirname, '../../', 'public', 'index.ejs'), {name});
    }  
  },

  getMap: async name => {
    let map = await Map.findOne({name});

    if(!map) {
      let data = Array(100).fill('#ffffff');
      map = {
        name,
        data
      }

      return await Map.create(map);
    }

    return map;
  },

  update: async data => {
    let name = data.name;
    let map = data.data;

    await Map.updateOne({name}, {data: map});
  }

}