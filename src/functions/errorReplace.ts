export default function errorReplace(text: string | never) {
  return text.replace(/^Error \d+: /, "");
}
