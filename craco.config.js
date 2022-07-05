const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#1575ce',
              '@link-color': '#1890ff',
              '@font-size-base': '14px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}; 