'use strict';

/**
 * short-chain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::short-chain.short-chain');
