export default {

  server: {
    cors: {
      origin: '*',
      enabled: true,

      headers: [
        'Accept',
        'Content-Type',
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Origin'
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
