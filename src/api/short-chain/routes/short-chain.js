'use strict';

/**
 * short-chain router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::short-chain.short-chain');
