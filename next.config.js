const withAntdLess = require('next-plugin-antd-less');

const nextConfig = withAntdLess({
  lessVarsFilePath: './styles/variables.less',
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    return config;
  },
});

module.exports = nextConfig;
