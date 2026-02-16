export function calculateDiscount(price, userType) {
  console.log(`Calculating discount for ${price} and ${userType}`);

  if (userType === "regular") {
    return price * 0.07;
  }

  if (userType === "vip") {
    return price * 0.15;
  }

  return 0;
}
