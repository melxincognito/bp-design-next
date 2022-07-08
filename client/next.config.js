/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    email_js_service_id: `${process.env.EMAIL_JS_SERVICE_ID}`,
    email_js_template_id: `${process.env.EMAIL_JS_TEMPLATE_ID}`,
    email_js_public_key: `${process.env.EMAIL_JS_PUBLIC_KEY}`,
  },
};
