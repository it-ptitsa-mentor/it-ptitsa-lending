export function getWelcomeMessage() {
  const FEATURE_FLAG = true;

  if (FEATURE_FLAG) {
    return "New feature enabled";
  }

  return "Old version";
}
