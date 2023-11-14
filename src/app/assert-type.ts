export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`${value} is not defined`);
  }
}

export function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Not a string');
  }
}

export function assertIsNonBlankString(
  value: unknown,
): asserts value is string {
  assertIsString(value);
  if (!value) {
    throw new Error('Expect string to be not blank');
  }
}

