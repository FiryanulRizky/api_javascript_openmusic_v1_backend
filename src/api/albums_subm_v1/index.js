const AlbumsHandler_subm_v1 = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'albumsapp_subm_v1',
  version: '1.0.0',
  register: async (server, {
    service,validator
  }, ) => {
    const albumsHandler_subm_v1 = new AlbumsHandler_subm_v1(service,validator);
    server.route(routes(albumsHandler_subm_v1));
  },
};
