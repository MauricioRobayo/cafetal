// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  env: {
    postsPath: 'posts',
  },
  webpack: (config) => {
    config.resolve.fallback = {
      crypto: false,
      fs: false,
      https: false,
      http: false,
      os: false,
      path: false,
      stream: false,
      constants: false,
      zlib: false,
      child_process: false,
      net: false,
      tls: false,
    };

    return config;
  },
};

module.exports = withNx(nextConfig);
