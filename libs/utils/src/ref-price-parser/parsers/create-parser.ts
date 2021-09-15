import camelCase from "lodash/camelCase";

function defaultValueParser(value: string): number {
  return Number(value.replace(/,/g, ""));
}

export function createBaseParser(
  regExp: RegExp,
  valueParser = defaultValueParser
) {
  return function (content: string): ReturnType<typeof valueParser> {
    const match = content.match(regExp);

    if (!match) {
      throw new Error(
        `Failed to find pattern '${regExp.source} in content '${content}`
      );
    }

    return valueParser(match[1]);
  };
}

export function createExtendedParser<T extends { [k: string]: unknown }>(
  regExp: RegExp,
  {
    keyMapper = camelCase,
    valueParser = defaultValueParser,
  }: {
    keyMapper?: (key: string) => string;
    valueParser?: (value: string) => unknown;
  } = {}
) {
  return function (content: string): T {
    const matchArray = [...content.matchAll(regExp)];

    if (matchArray.length === 0) {
      throw new Error(
        `Failed to find pattern '${regExp.source} in content '${content}`
      );
    }

    return Object.fromEntries(
      matchArray.map(([, key, value]) => [keyMapper(key), valueParser(value)])
    ) as T;
  };
}
