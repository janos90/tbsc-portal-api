export default {
  development: {
    driver: 'sqlite3',
    database: 'tbsc_portal_api_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'tbsc_portal_api_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'tbsc_portal_api_prod'
  }
};
