export function calculateDiscount(price, userType) {
  if (userType === "regular") {
    return price * 0.05;
  }
  return 0;
}
