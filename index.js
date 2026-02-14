export function getWelcomeMessage() {
  const FEATURE_FLAG = true;

  console.log("FEATURE_FLAG", FEATURE_FLAG);

  if (FEATURE_FLAG) {
    return "New feature is enabled v1";
  }

  return "Old version";
}
