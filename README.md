# PCX Development Documentation

## Development Setup

### Prerequisites

- Node.js (LTS version recommended)
- pnpm (Package manager)
- A Shopify store with Storefront API access

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Environment Setup

1. Set up your Shopify store credentials:

   - Obtain a Storefront API access token from your Shopify admin
   - Note your store's myshopify.com domain

2. Update the API configuration in your code:
   - Set `publicAccessToken` with your Storefront API token
   - Set `storeDomain` with your store's domain

### Development

This project is designed to be integrated with Webflow. Follow these steps for development:

1. Run the development server:

```bash
pnpm dev
```

2. Add the following script tags to your Webflow page settings (Custom Code section):

```html
<script type="module" src="http://localhost:7456/@vite/client"></script>
<script type="module" src="http://localhost:7456/src/index.ts"></script>
```

Note:

- These script tags should be added in the Webflow Designer under Page Settings > Custom Code > Footer Code.
- The default port is 7456, but it may change if that port is already in use. Check your terminal output when running `pnpm dev` for the actual port number and update the script tags accordingly.

### Production Deployment

For production deployment in Webflow, replace the development script tags with the CDN-hosted production version:

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/BX-Studio-Webflow/pcx@latest/dist/index.js"
></script>
```

Note:

- Replace `@latest` with a specific commit hash (e.g., `@b76d9a7`) for better version control
- The script should be added in the Webflow Designer under Page Settings > Custom Code > Footer Code
- Using a specific commit hash is recommended for production to ensure stability

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

## index.ts Documentation

### Overview

The main TypeScript file that handles the e-commerce functionality for the PCX Markets Shopify storefront. It manages product displays, cart operations, and checkout processes using the Shopify Storefront API.

### Key Constants

#### API Configuration

- `publicAccessToken`
  - Shopify Storefront API access token for authentication
  - Keep this value private and secure
- `storeDomain`
  - Base domain for the Shopify store
  - Your store's myshopify.com domain
- `productId`
  - Main product ID used for fetching product data
  - Contains both Clean By The Ton and Personal Annual Footprint variants

#### Product Constants

- Clean By The Ton:

  - Base KG Value: 1000
  - Base LBS Value: 2200
  - Base Bottles Value: 66000
  - Variant ID: Contact development team

- Personal Annual Footprint:
  - Base KG Value: 220
  - Base LBS Value: 485
  - Base Bottles Value: 4400
  - Variant ID: Contact development team

### Key Features

- Product price and impact calculations
- Cart management
- Gift options handling
- Quantity controls
- Checkout process

### Main Components

#### Cart Management

- Creates and manages shopping cart items
- Handles item quantity updates
- Supports gift options with recipient details
- Calculates and updates subtotals

#### Product Calculations

- Handles two main products:
  - Clean By The Ton
  - Personal Annual Footprint
- Calculates environmental impact metrics (KG/LBS/Bottles)
- Updates prices based on quantity changes

#### Form Handling

- Gift option toggles
- Quantity input validation
- Required field management
- Form submission controls

#### API Integration

- Uses Shopify Storefront API
- Handles cart creation
- Manages checkout URL generation
- Processes product variant fetching

### Usage Example

```typescript
// Initialize the client
const storefrontClient = createStorefrontApiClient({
  storeDomain: "your-store.myshopify.com",
  apiVersion: "2024-04",
  publicAccessToken: "your-access-token",
});

// Add items to cart
addToCart({
  variantItemId: "product-variant-id",
  qty: "1",
  isGift: false,
  product: productData,
  isGiftEmail: null,
  isGiftMessage: null,
  isGiftName: null,
});
```

### Key Functions

- `createLineItemsManager()`: Manages cart items
- `updateCart()`: Refreshes cart display
- `handleQuantityChange()`: Updates quantities and calculations
- `createCartAndAddItems()`: Creates new cart with Shopify API
- `getCartWebUrl()`: Generates checkout URL

### Dependencies

- @shopify/storefront-api-client
- DOM manipulation
- Custom type definitions
