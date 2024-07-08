"use strict";
const dotenv = require("dotenv");
dotenv.config();

exports.config = {
  app_name: ["foodme-app-aws-deploy"],
  license_key:
    process.env.NEW_RELIC_LICENSE_KEY ||
    "be6b8f16756bca63c98a0e1779079107693eNRAL",
  logging: { level: "info" },
  allow_all_headers: true,
  attributes: {
    exclude: [
      "request.headers.cookie",
      "request.headers.authorization",
      "request.headers.proxyAuthorization",
      "request.headers.setCookie*",
      "request.headers.x*",
      "response.headers.cookie",
      "response.headers.authorization",
      "response.headers.proxyAuthorization",
      "response.headers.setCookie*",
      "response.headers.x*",
    ],
  },
};
