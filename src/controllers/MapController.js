const path = require('path');

const Map = require('../models/Map');

module.exports = {

  /*
  * HTTP GET: '/'
  *
  * @return: Página de boas vindas
  */
  welcome: (req, res) => {
    return res.render(path.join(__dirname, '../../', 'public', 'welcome.ejs'));
  },

  /*
  * HTTP GET: '/:pageName'
  *
  * @params: pageName: nome do mapa
  * 
  * @return: página do mapa com o nome definido na URL
  */
  get: (req, res) => {
    let name = req.params.pageName;
    
    if(name != 'favicon.ico') {
      return res.render(path.join(__dirname, '../../', 'public', 'index.ejs'), {name});
    }  
  },

  /*
  * Busca ou cria no banco de dados o mapa com o nome definido na URL
  *
  * @params: name: nome do mapa
  * 
  * @return: Mapa com o nome definido na URL
  */
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

  /*
  * Atualiza o mapa com o nome definido na URL no banco de dados
  * 
  * @params: data: JSON contendo o nome do mapa e o mapa em formato de array
  */
  update: async data => {
    let name = data.name;
    let map = data.data;

    await Map.updateOne({name}, {data: map});
  }

}