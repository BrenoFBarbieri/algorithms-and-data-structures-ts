import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { twoSum } from "./two-sum.js";

describe("Array - Two Sum", () => {
  describe("Valid Pairs", () => {
    it("should return indices of the first valid pair that sums to target", () => {
      const nums = [2, 7, 11, 15];
      const target = 9;

      const result = twoSum(nums, target);

      assert.deepStrictEqual(result, [0, 1]);
    });

    it("should return correct indices when solution is not the first elements", () => {
      const nums = [3, 2, 4];
      const target = 6;

      const result = twoSum(nums, target);

      assert.deepStrictEqual(result, [1, 2]);
    });

    it("should handle duplicate numbers", () => {
      const nums = [3, 3];
      const target = 6;

      const result = twoSum(nums, target);

      assert.deepStrictEqual(result, [0, 1]);
    });

    it("should work with negative numbers", () => {
      const nums = [-3, 4, 3, 90];
      const target = 0;

      const result = twoSum(nums, target);

      assert.deepStrictEqual(result, [0, 2]);
    });
  });

  describe("Result Integrity", () => {
    it("should return exactly two different indices", () => {
      const nums = [5, 1, 9, 3];
      const target = 4;

      const [i, j] = twoSum(nums, target);

      assert.notEqual(i, j);
    });

    it("returned indices should sum to the target", () => {
      const nums = [10, 22, 5, 75, 65, 80];
      const target = 85;

      const [i, j] = twoSum(nums, target);

      assert.equal(nums[i] + nums[j], target);
    });
  });
});
