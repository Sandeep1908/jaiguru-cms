'use strict';

/**
 * golden-coin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::golden-coin.golden-coin');
