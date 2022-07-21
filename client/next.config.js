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
    paypal_client_id: `${process.env.PAYPAL_CLIENT_ID}`,
    firebase_api_key: `${process.env.FIREBASE_API_KEY}`,
    firebase_auth_domain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
    firebase_project_id: `${process.env.FIREBASE_PROJECT_ID}`,
    firebase_storage_bucket: `${process.env.FIREBASE_STORAGE_BUCKET}`,
    firebase_messaging_sender_id: `${process.env.FIREBASE_MESSAGING_SENDER_ID}`,
    firebase_app_id: `${process.env.FIREBASE_APP_ID}`,
  },
};
