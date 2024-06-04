'use strict';

/**
 * neckwear service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::neckwear.neckwear');
