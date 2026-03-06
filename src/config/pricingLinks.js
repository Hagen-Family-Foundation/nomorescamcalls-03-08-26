/**
 * ============================================================================
 * PRICING LINKS CONFIGURATION
 * ============================================================================
 * 
 * Stripe Payment Links for 4-Pillar Bundles and À-la-carte Add-ons
 * 
 * Bundles include all 4 pillars: Phone + Text + Email + Web protection
 * Add-ons are priced at $12.99 per line per month each
 */

export const PRICING_LINKS = {
  // 4-Pillar Bundle Payment Links (includes all protections)
  BUNDLE_BASIC_4_PILLARS: 'https://buy.stripe.com/28E7sK2JRdw60PT45o4gg0b',
  BUNDLE_MID_4_PILLARS: 'https://buy.stripe.com/8x2aEWckr77IcyB9pI4gg0e',
  BUNDLE_FAMILY_4_PILLARS: 'https://buy.stripe.com/fZuaEWacj0Jk2Y159s4gg0g',

  // Standalone Add-on Payment Links ($12.99/line/mo each)
  TEXTINATORS: 'https://buy.stripe.com/8x2aEWbgn1No1TXbxQ4gg09',
  EMAILINATORS: 'https://buy.stripe.com/aFa4gy0BJ2Rs9mp0Tc4gg08',
  WEBINATORS: 'https://buy.stripe.com/8x24gyeszdw6eGJatM4gg07',
};

/**
 * Pricing Data Configuration
 * Used by PricingChart component
 */
export const PRICING_DATA = {
  // Phone-only base prices
  phoneOnly: {
    basic: { price: 15.99, lines: 1 },
    mid: { price: 28.99, lines: 3 },
    family: { price: 47.99, lines: 5 },
  },

  // Add-on price per line per month
  addonPricePerLine: 12.99,

  // Bundle prices (all 4 pillars included)
  bundles: {
    basic: { price: 33.99, lines: 1 },
    mid: { price: 81.99, lines: 3 },
    family: { price: 109.99, lines: 5 },
  },

  // Pre-calculated à la carte totals (phone + 3 add-ons × lines)
  aLaCarteTotals: {
    basic: 54.96,   // $15.99 + (3 × $12.99 × 1) = $54.96
    mid: 145.90,    // $28.99 + (3 × $12.99 × 3) = $145.90  
    family: 242.84, // $47.99 + (3 × $12.99 × 5) = $242.84
  },

  // Savings percentages
  savings: {
    basic: 38,
    mid: 44,
    family: 55,
  },
};

export default PRICING_LINKS;
