'use strict';

/**
 * pendant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pendant.pendant');
