const path = require('path');

const Map = require('../models/Map');

module.exports = {

  get: async (req, res) => {

    let name = req.params.pageName;

    if(name != null && name != 'favicon.ico') {

      let map = await Map.findOne({name});

      if(!map) {

        let data = Array(10).fill(Array(10).fill('#ffffff'));
        map = {
          name,
          data
        }

        await Map.create(map);

      }

      return res.render(path.join(__dirname, '../../', 'public', 'index.ejs'), {map: map.data, name: map.name});
    
    }

    return res.send("Por favor, coloque o nome da sala na URL!");

  },

  update: async data => {
    let name = data.name;
    let map = data.data;

    await Map.updateOne({name}, {data: map});
  }

}