export interface CartItem {
  merchandiseId: string;
  quantity: number;
  productName: string;
  productImage: string;
  productPrice: number;
  attributes: {
    key: string;
    value: string;
  }[];
}

export interface ProductResponse {
  product: {
    id: string;
    title: string;
    handle: string;
    variants: {
      edges: {
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          image: {
            url: string;
            altText: null;
            width: number;
            height: number;
          };
        };
      }[];
    };
  };
}

export interface CreateCartResponse {
  cartCreate: {
    cart: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      attributes: {
        key: string;
        value: string;
      }[];
      lines: {
        edges: {
          node: {
            id: string;
            merchandise: {
              id: string;
              title: string;
            };
            quantity: number;
          };
        }[];
      };
    };
    userErrors: any[];
  };
}

export interface GetCartResponse {
  cart: {
    id: string;
    checkoutUrl: string;
    lines: {
      edges: {
        node: {
          id: string;
          merchandise: {
            id: string;
            title: string;
          };
          quantity: number;
        };
      }[];
    };
  };
}
