
/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const nextConfig = {
    module: {
        rules: [
          {
            test: /\.ttf$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/', // This can be adjusted based on where you want to store the font files
                },
              },
            ],
          },
          // other rules...
        ],
      },
    // // output: 'export',
    // // Enable React Strict Mode
    // reactStrictMode: true,
    // // Enable SWC minification
    // swcMinify: true,
  
    // // Add custom headers
    
}
module.exports = withFonts({
    webpack(config, options) {
      return config;
    },
  });

module.exports = nextConfig

