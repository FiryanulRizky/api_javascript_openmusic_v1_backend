const ClientError = require("../../exceptions/ClientError");

class AlbumsHandler_subm_v1 {
  constructor(service,validator) {
    this._service = service;
    this._validator = validator;
    this.postAlbumHandler_subm_v1 = this.postAlbumHandler_subm_v1.bind(this);
    this.getAlbumByIdHandler_subm_v1 = this.getAlbumByIdHandler_subm_v1.bind(this);
    this.putAlbumByIdHandler_subm_v1 = this.putAlbumByIdHandler_subm_v1.bind(this);
    this.deleteAlbumByIdHandler_subm_v1 = this.deleteAlbumByIdHandler_subm_v1.bind(this);
  }

  async postAlbumHandler_subm_v1(request,h) {
    try {
      this._validator.validateAlbumPayload(request.payload);
      const { name,year } = request.payload;
      const albumId = await this._service.addAlbum({ name,year });

      const response = h.response({
        status: 'success',
        message: 'Album berhasil ditambahkan',
        data: {
          albumId,
        },
      }, );
      response.code(201);
      return response;
    } catch (error) {

      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        }, );
        response.code(error.statusCode, );
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      }, );
      response.code(500);
      console.error(error);
      return response;
    }
  }

  async getAlbumByIdHandler_subm_v1(request, h) {
    try {
      const {
        id,
      } = request.params;
      const album = await this._service.getAlbumById(id);
      return {
        status: 'success',
        data: {
          album,
        },
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        }, );
        response.code(error.statusCode, );
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      }, );
      response.code(500);
      console.error(error);
      return response;
    }
  }
  async putAlbumByIdHandler_subm_v1(request, h) {
    try {
      this._validator.validateAlbumPayload(request.payload);
      const {
        id,
      } = request.params;

      await this._service.editAlbumById(id, request.payload, );

      return {
        status: 'success',
        message: 'Album berhasil diperbarui',
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        }, );
        response.code(error.statusCode, );
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      }, );
      response.code(500);
      console.error(error);
      return response;
    }

  }
  async deleteAlbumByIdHandler_subm_v1(request, h) {
    try {
      const {
        id,
      } = request.params;
      await this._service.deleteAlbumById(id);

      return {
        status: 'success',
        message: 'Lagu berhasil dihapus',
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        }, );
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      }, );
      response.code(500);
      console.error(error);
      return response;
    }
  }
}
module.exports = AlbumsHandler_subm_v1;
