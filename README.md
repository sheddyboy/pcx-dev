# PCX Development Documentation

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
