import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
});

// Product IDs (set these in your Stripe Dashboard)
export const PRODUCTS = {
  DEVOTIONAL_GUIDE: process.env.STRIPE_PRODUCT_DEVOTIONAL_GUIDE || 'prod_xxxxx',
  ACADEMY_PERSONAL_STATEMENT: process.env.STRIPE_PRODUCT_PERSONAL_STATEMENT || 'prod_xxxxx',
  ACADEMY_SECONDARY_ESSAYS: process.env.STRIPE_PRODUCT_SECONDARY_ESSAYS || 'prod_xxxxx',
  ACADEMY_INTERVIEW_PREP: process.env.STRIPE_PRODUCT_INTERVIEW_PREP || 'prod_xxxxx',
  ACADEMY_ALL_ACCESS: process.env.STRIPE_PRODUCT_ALL_ACCESS || 'prod_xxxxx',
};

/**
 * Create a Stripe checkout session
 */
export async function createCheckoutSession({
  priceId,
  successUrl,
  cancelUrl,
  customerId,
  mode = 'payment',
  shippingAddressCollection = false,
}: {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  customerId?: string;
  mode?: 'payment' | 'subscription';
  shippingAddressCollection?: boolean;
}) {
  return stripe.checkout.sessions.create({
    mode,
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: successUrl,
    cancel_url: cancelUrl,
    customer: customerId,
    shipping_address_collection: shippingAddressCollection
      ? {
          allowed_countries: ['US', 'CA'],
        }
      : undefined,
  });
}

/**
 * Retrieve a customer's subscriptions
 */
export async function getCustomerSubscriptions(customerId: string) {
  return stripe.subscriptions.list({
    customer: customerId,
    status: 'active',
  });
}

/**
 * Check if customer has access to a product
 */
export async function hasAccessToProduct(customerId: string, productId: string): Promise<boolean> {
  const subscriptions = await getCustomerSubscriptions(customerId);

  for (const subscription of subscriptions.data) {
    for (const item of subscription.items.data) {
      if (item.price.product === productId) {
        return true;
      }
    }
  }

  return false;
}
