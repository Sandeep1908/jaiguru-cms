'use strict';

/**
 * bangle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bangle.bangle');
