import {
  createRange,
  rangeSize,
  containsBlock,
  moveRange,
  rangeDescription,
} from "../utils/block-range";

const range =
  createRange(
    1200n,
    1250n,
  );

console.log(
  "Block range example",
);

console.log(
  "==================",
);

console.log(
  "Range:",
  rangeDescription(range),
);

console.log(
  "Size:",
  rangeSize(range).toString(),
);

console.log(
  "Contains 1220:",
  containsBlock(
    range,
    1220n,
  ),
);

console.log(
  "Contains 1300:",
  containsBlock(
    range,
    1300n,
  ),
);

const moved =
  moveRange(
    range,
    100n,
  );

console.log(
  "Moved range:",
  rangeDescription(moved),
);

console.log(
  "Moved size:",
  rangeSize(moved).toString(),
);

console.log(
  "Original from:",
  range.from.toString(),
);

console.log(
  "Original to:",
  range.to.toString(),
);

console.log(
  "New from:",
  moved.from.toString(),
);

console.log(
  "New to:",
  moved.to.toString(),
);
