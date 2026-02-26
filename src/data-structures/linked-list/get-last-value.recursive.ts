/**
 * Exercise: Get the Last Value.
 *
 * Description:
 * - Implement a function that returns the last value
 *   of a singly linked list.
 *
 * Pattern: Linear Traversal.
 * Approach: Recursive.
 *
 * Time Complexity: O(n).
 * Space Complexity: O(n) (due to call stack).
 *
 * Trade-offs:
 * - More concise and expressive than the iterative version.
 * - Uses additional stack space proportional to list size.
 * - Risk of stack overflow for very large linked lists.
 *
 * Best Use Case:
 * - Small to moderately sized lists.
 * - Educational purposes where recursive reasoning is desired.
 *
 * Note:
 * - May cause stack overflow in JavaScript environments
 *   when recursion depth becomes too large.
 */

import type { ListNode } from "./ListNode.js";

function getLastValueRecursive(head: ListNode | null): number | null {
  if (!head) return null;
  if (!head.next) return head.val;
  return getLastValueRecursive(head.next);
}

export { getLastValueRecursive };
