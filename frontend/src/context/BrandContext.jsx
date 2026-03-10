import React, { createContext, useContext } from 'react';
import { brands } from '../config/brandConfig';

/**
 * ============================================================================
 * BRAND CONTEXT - Multi-Brand Support
 * ============================================================================
 * 
 * This context provides brand configuration to all components via the useBrand() hook.
 * 
 * HOW BRAND SELECTION WORKS:
 * 1. The active brand is determined by VITE_BRAND_KEY environment variable
 * 2. Valid values: 'default', 'secondBrand', 'scaminater', or any key defined in brands map
 * 3. If VITE_BRAND_KEY is not set or invalid, falls back to 'default'
 * 
 * ENVIRONMENT VARIABLE:
 *   VITE_BRAND_KEY - Controls which brand config to use
 *   
 *   Example .env.local values:
 *   - VITE_BRAND_KEY=default        → Uses NoMoreScamCalls brand
 *   - VITE_BRAND_KEY=secondBrand    → Uses SecondBrand (App #2)
 *   - VITE_BRAND_KEY=scaminater     → Uses Scaminaters (Executive Protection)
 *   - (not set)                     → Falls back to 'default'
 * 
 * USAGE IN COMPONENTS:
 *   import { useBrand } from '../context/BrandContext';
 *   
 *   function MyComponent() {
 *     const brand = useBrand();
 *     return <h1>{brand.appName}</h1>;
 *   }
 */

const BrandContext = createContext(null);

/**
 * Get the active brand key from environment variable.
 * Falls back to 'default' if not set or invalid.
 */
const getBrandKey = () => {
  const key = import.meta.env.VITE_BRAND_KEY || 'default';
  
  // Validate the key exists in brands map
  if (brands[key]) {
    return key;
  }
  
  // Log warning in development if invalid key provided
  if (import.meta.env.DEV && key !== 'default') {
    console.warn(
      `[BrandContext] Invalid VITE_BRAND_KEY="${key}". ` +
      `Valid keys: ${Object.keys(brands).join(', ')}. ` +
      `Falling back to "default".`
    );
  }
  
  return 'default';
};

/**
 * Get the active brand configuration.
 * This is called once at app initialization.
 */
const getActiveBrand = () => {
  const brandKey = getBrandKey();
  const brand = brands[brandKey];
  
  // Log active brand in development
  if (import.meta.env.DEV) {
    console.log(`[BrandContext] Using brand: "${brandKey}" (${brand.appName})`);
  }
  
  return brand;
};

// The active brand, determined at build/runtime
const activeBrand = getActiveBrand();

/**
 * BrandProvider - Wrap your entire app with this component
 * 
 * Usage in src/main.jsx:
 * 
 *   import { BrandProvider } from './context/BrandContext';
 *   
 *   root.render(
 *     <BrandProvider>
 *       <App />
 *     </BrandProvider>
 *   );
 * 
 * The provider automatically uses the brand selected by VITE_BRAND_KEY.
 * No props needed - brand selection is handled via environment variable.
 */
export function BrandProvider({ children }) {
  return (
    <BrandContext.Provider value={activeBrand}>
      {children}
    </BrandContext.Provider>
  );
}

/**
 * useBrand hook - Access brand config in any component
 * 
 * Returns the active brand's complete configuration object.
 * The brand returned is determined by VITE_BRAND_KEY at build time.
 * 
 * Usage:
 * 
 *   import { useBrand } from '../context/BrandContext';
 *   
 *   function Header() {
 *     const brand = useBrand();
 *     
 *     return (
 *       <header>
 *         <h1>{brand.appName}</h1>
 *         <p style={{ color: brand.colors.primary }}>
 *           {brand.tagline}
 *         </p>
 *         <a href={`mailto:${brand.supportEmail}`}>Contact</a>
 *       </header>
 *     );
 *   }
 * 
 * Available brand properties:
 * - brand.appName          - Display name of the app
 * - brand.companyName      - Legal company name
 * - brand.domain           - Domain without protocol
 * - brand.tagline          - Hero section tagline
 * - brand.contactEmail     - Contact email
 * - brand.supportEmail     - Support email
 * - brand.salesEmail       - Sales email
 * - brand.phone            - Phone number
 * - brand.address          - Physical address
 * - brand.colors.*         - Brand colors (primary, secondary, accent, etc.)
 * - brand.social.*         - Social media links (facebook, twitter, etc.)
 * - brand.pricing.*        - Pricing tiers and currency
 * - brand.seo.*            - SEO metadata
 * - brand.legal.*          - Legal page URLs
 * - brand.decorations.*    - Visual effect feature flags
 */
export function useBrand() {
  const context = useContext(BrandContext);
  
  if (!context) {
    throw new Error(
      'useBrand must be used within a <BrandProvider>. ' +
      'Make sure your component is wrapped with BrandProvider in src/main.jsx. ' +
      'Current VITE_BRAND_KEY: ' + (import.meta.env.VITE_BRAND_KEY || '(not set)')
    );
  }
  
  return context;
}

/**
 * Export for advanced use cases where you need all brands or the active key
 */
export { brands, activeBrand };
export const activeBrandKey = getBrandKey();

export default BrandContext;
