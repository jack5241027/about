const env = process.env.NODE_ENV || 'development';

module.exports = {
  development: {
    isDev: true,
    isProd: false,
  },
  production: {
    isDev: false,
    isProd: true,
  },
}[env];
