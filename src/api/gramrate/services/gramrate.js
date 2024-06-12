'use strict';

/**
 * gramrate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gramrate.gramrate');
