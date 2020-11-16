export default {

  server: {
    cors: {
      origin: '*',
      enabled: true,

      headers: [
        'Accept',
        'Content-Type',
        'Access-Control-Allow-Headers',
        'access-control-allow-origin'
      ],

      methods: [
        'GET',
        'POST',
        'PATCH',
        'DELETE',
        'HEAD',
        'OPTIONS'
      ]
    }
  },

  logging: {
    level: 'INFO',
    format: 'JSON',
    enabled: true,

    filter: {
      params: []
    }
  }
};
