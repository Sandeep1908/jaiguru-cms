'use strict';

/**
 * silver-coin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::silver-coin.silver-coin');
