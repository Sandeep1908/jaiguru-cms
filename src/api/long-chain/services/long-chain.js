'use strict';

/**
 * long-chain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::long-chain.long-chain');
