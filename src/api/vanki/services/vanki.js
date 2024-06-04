'use strict';

/**
 * vanki service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vanki.vanki');
