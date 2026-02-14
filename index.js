export function getWelcomeMessage() {
  const FEATURE_FLAG = true;

  if (FEATURE_FLAG) {
    return undefined;
  }

  return "Old version";
}
