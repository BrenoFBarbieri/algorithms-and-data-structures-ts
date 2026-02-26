/**
 * Exercise: Get the Last Value.
 *
 * Description:
 * - Implement a function that returns the last value
 *   of a singly linked list.
 *
 * Pattern: Linear Traversal.
 * Approach: Iterative.
 *
 * Time Complexity: O(n).
 * Space Complexity: O(1).
 *
 * Trade-offs:
 * - Memory efficient (constant space).
 * - Safe for very large linked lists.
 * - Requires handling edge case for empty list.
 *
 * Best Use Case:
 * - Retrieving terminal elements in linear structures.
 * - Situations where only the final node matters.
 */

import type { ListNode } from "./ListNode.js";

function getLastValueIterative(head: ListNode | null): number | null {
  while (head?.next) {
    head = head.next;
  }
  return head?.val ?? null;
}

export { getLastValueIterative };
