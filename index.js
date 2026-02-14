export function getWelcomeMessage() {
  const FEATURE_FLAG = true;

  if (FEATURE_FLAG) {
    return "New feature is enabled v1";
  }

  return "Old version";
}
