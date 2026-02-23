/**
 * Problem: Two Sum
 * Description:
 * - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * - You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * - You can return the answer in any order.
 *
 * Pattern: HashMap / Complement lookup
 *
 * Strategy:
 * - Store visited numbers in a Map
 * - For each number, check if complement exists
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Trade-offs:
 * - Uses extra memory for faster lookup
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

export { twoSum };
