export type BlockRange = {
  from: bigint;
  to: bigint;
};

export function createRange(
  from: bigint,
  to: bigint,
): BlockRange {
  if (from < 0n) {
    throw new Error(
      "from block cannot be negative",
    );
  }

  if (to < from) {
    throw new Error(
      "to block must be greater than from",
    );
  }

  return {
    from,
    to,
  };
}

export function rangeSize(
  range: BlockRange,
): bigint {
  return (
    range.to -
    range.from +
    1n
  );
}

export function containsBlock(
  range: BlockRange,
  block: bigint,
): boolean {
  return (
    block >= range.from &&
    block <= range.to
  );
}

export function isSingleBlock(
  range: BlockRange,
): boolean {
  return (
    range.from === range.to
  );
}

export function moveRange(
  range: BlockRange,
  offset: bigint,
): BlockRange {
  return createRange(
    range.from + offset,
    range.to + offset,
  );
}

export function rangeDescription(
  range: BlockRange,
): string {
  if (isSingleBlock(range)) {
    return `block ${range.from}`;
  }

  return `blocks ${range.from}-${range.to}`;
}
