const path = require('path');

const Map = require('../models/Map');

module.exports = {

  get: async (req, res) => {
    let name = req.params.pageName;

    if(name != null && name != 'favicon.ico') {
      return res.render(path.join(__dirname, '../../', 'public', 'index.ejs'), {name});
    }
    
    return res.send("Por favor, coloque o nome da sala na URL!");
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