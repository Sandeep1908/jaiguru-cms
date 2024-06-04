'use strict';

/**
 * long-chain router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::long-chain.long-chain');
