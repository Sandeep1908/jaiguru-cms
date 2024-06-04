'use strict';

/**
 * bangle router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bangle.bangle');
