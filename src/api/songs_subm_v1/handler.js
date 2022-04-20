const ClientError = require("../../exceptions/ClientError");

class SongsHandler_subm_v1 {
  constructor(service,validator) {
    this._service = service;
    this._validator = validator;
    this.postSongHandler_subm_v1 = this.postSongHandler_subm_v1.bind(this);
    this.getSongsHandler_subm_v1 = this.getSongsHandler_subm_v1.bind(this);
    this.getSongByIdHandler_subm_v1 = this.getSongByIdHandler_subm_v1.bind(this);
    this.putSongByIdHandler_subm_v1 = this.putSongByIdHandler_subm_v1.bind(this);
    this.deleteSongByIdHandler_subm_v1 = this.deleteSongByIdHandler_subm_v1.bind(this);
  }

  async postSongHandler_subm_v1(request,h) {
    try {
      this._validator.validateSongPayload(request.payload);
      const { title,year,genre,performer,duration,albumId } = request.payload;
      const songId = await this._service.addSong({ title,year,genre,performer,duration,albumId });

      const response = h.response({
        status: 'success',
        message: 'Lagu berhasil ditambahkan',
        data: {
          songId,
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
  async getSongsHandler_subm_v1(request) {
    const params = request.query;
    const songs = await this._service.getSongs(params);
    return {
      status: 'success',
      data: {
        songs: songs.map(song => ({
          id: song.id,
          title: song.title,
          performer: song.performer,
        }), ),
      },
    };
  }
  async getSongByIdHandler_subm_v1(request,h) {
    try {
      const {
        id,
      } = request.params;
      const song = await this._service.getSongById(id);

      return {
        status: 'success',
        data: {
          song,
        },
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
  async putSongByIdHandler_subm_v1(request,h) {
    try {
      this._validator.validateSongPayload(request.payload);
      const {
        id,
      } = request.params;

      await this._service.editSongById(id, request.payload, );

      return {
        status: 'success',
        message: 'Lagu berhasil diperbarui',
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
  async deleteSongByIdHandler_subm_v1(request,h) {
    try {
      const {
        id,
      } = request.params;
      await this._service.deleteSongById(id);
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
module.exports = SongsHandler_subm_v1;
