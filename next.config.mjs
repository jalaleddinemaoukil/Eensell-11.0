import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        domains: ['assets.aceternity.com'],
        domains: ['images.unsplash.com'],
  },    
};

export default withSentryConfig(nextConfig, {
silent: true,
org: "javascript-mastery",
project: "javascript-nextjs",
}, {

widenClientFileUpload: true,

transpileClientSDK: true,


hideSourceMaps: true,


disableLogger: true,

automaticVercelMonitors: true,

});

