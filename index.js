export function calculateDiscount(price, userType) {
  if (userType === "regular") {
    console.log(`Regular user ${price} discount is 5%`);
    return price * 0.05;
  }

  if (userType === "vip") {
    console.log(`VIP user ${price} discount is 15%`);
    return price * 0.15;
  }

  console.log(`Unknown user ${price} discount is 0%`);
  return 0;
}
