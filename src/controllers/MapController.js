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
  * HTTP GET: '/:pageName?mapSize='
  *
  * @params: pageName: nome do mapa, mapSize: tamanho do mapa
  * 
  * @return: página do mapa com o nome definido na URL
  */
  get: (req, res) => {
    let name = req.params.pageName;
    let mapSize = req.query.mapSize;
    if(name != 'favicon.ico') {
      return res.render(path.join(__dirname, '../../', 'public', 'index.ejs'), {name, mapSize: mapSize == undefined || mapSize == null ? 10 : mapSize});
    }  
  },

  /*
  * Busca ou cria no banco de dados o mapa com o nome definido na URL
  *
  * @params: name: nome do mapa
  * 
  * @return: Mapa com o nome definido na URL
  */
  getMap: async getData => {
    let map = await Map.findOne({name: getData.name});
    if(!map) {
      let data = Array(getData.size*getData.size).fill('#ffffff');
      map = {
        name: getData.name,
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