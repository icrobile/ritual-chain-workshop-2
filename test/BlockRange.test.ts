import { expect } from "chai";

import {
  createRange,
  rangeSize,
  containsBlock,
  isSingleBlock,
  moveRange,
  rangeDescription,
} from "../utils/block-range";

describe("block range", function () {
  it("creates a valid range", function () {
    const range =
      createRange(100n, 110n);

    expect(range.from)
      .to.equal(100n);

    expect(range.to)
      .to.equal(110n);
  });

  it("calculates range size", function () {
    const range =
      createRange(100n, 110n);

    expect(
      rangeSize(range),
    ).to.equal(11n);
  });

  it("contains a block", function () {
    const range =
      createRange(100n, 110n);

    expect(
      containsBlock(range, 105n),
    ).to.equal(true);
  });

  it("rejects a block outside the range", function () {
    const range =
      createRange(100n, 110n);

    expect(
      containsBlock(range, 120n),
    ).to.equal(false);
  });

  it("detects a single block", function () {
    const range =
      createRange(100n, 100n);

    expect(
      isSingleBlock(range),
    ).to.equal(true);
  });

  it("moves a range", function () {
    const range =
      createRange(100n, 105n);

    const moved =
      moveRange(range, 10n);

    expect(moved.from)
      .to.equal(110n);

    expect(moved.to)
      .to.equal(115n);
  });

  it("describes a normal range", function () {
    expect(
      rangeDescription(
        createRange(100n, 110n),
      ),
    ).to.equal(
      "blocks 100-110",
    );
  });

  it("describes a single block", function () {
    expect(
      rangeDescription(
        createRange(100n, 100n),
      ),
    ).to.equal(
      "block 100",
    );
  });

  it("rejects reversed ranges", function () {
    expect(() =>
      createRange(110n, 100n),
    ).to.throw();
  });
});
