export const ORDER_STATUSES = ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'];

export const PAYMENT_METHODS = ['UPI', 'Credit Card', 'Debit Card', 'Cash on Delivery', 'Net Banking'];

export const PAYMENT_STATUSES = ['PENDING', 'COMPLETED', 'FAILED', 'REFUNDED'];

export const DELIVERY_STATUSES = ['PENDING', 'PICKED_UP', 'IN_TRANSIT', 'DELIVERED', 'FAILED'];

export const USER_TYPES = ['ADMIN', 'MANAGER', 'STAFF'];

export const REFUND_STATUSES = ['PENDING', 'PROCESSED', 'COMPLETED'];

export const NOTIFICATION_TYPES = [
  'ORDER_PLACED', 'ORDER_SHIPPED', 'ORDER_DELIVERED',
  'PAYMENT_RECEIVED', 'CANCELLATION', 'PROMOTION'
];

export const VEHICLE_TYPES = ['Motorcycle', 'Bicycle', 'Scooter', 'Van', 'Car'];

export const PRODUCT_CATEGORIES = [
  'Groceries', 'Fruits', 'Vegetables', 'Beverages',
  'Bakery', 'Dairy', 'Cooking Essentials', 'Snacks',
  'Personal Care', 'Household'
];

export const CARD_COLORS = ['purple', 'pink', 'blue', 'green', 'orange'];

export const CHART_COLORS = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f43f5e', '#06b6d4'];

export const PAYMENT_ICONS = {
  'UPI': '📱',
  'Credit Card': '💳',
  'Debit Card': '💳',
  'Cash on Delivery': '💰',
  'Net Banking': '🏦',
};

export const NOTIFICATION_ICONS = {
  ORDER_PLACED: '🛒',
  ORDER_SHIPPED: '📦',
  ORDER_DELIVERED: '✅',
  PAYMENT_RECEIVED: '💰',
  CANCELLATION: '❌',
  PROMOTION: '🎉',
};