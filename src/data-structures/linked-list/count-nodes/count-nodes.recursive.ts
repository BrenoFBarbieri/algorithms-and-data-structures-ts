/**
 * Exercise: Count the Number of Nodes.
 *
 * Description:
 * - Implement a function that counts the number of nodes
 *   in a singly linked list.
 *
 * Pattern: Linear Traversal.
 * Approach: Recursive.
 *
 * Time Complexity: O(n).
 * Space Complexity: O(n) (due to call stack).
 *
 * Trade-offs:
 * - More concise and expressive.
 * - Uses additional stack space.
 * - Risk of stack overflow for very large linked lists.
 *
 * Best Use Case:
 * - Small to moderately sized lists.
 * - Naturally suited for hierarchical structures (e.g., trees).
 *
 * Note:
 * - May cause stack overflow in JavaScript environments
 *   when recursion depth becomes too large.
 */

import type { ListNode } from "../ListNode.js";

function countNodesRecursive(head: ListNode | null): number {
  if (!head) return 0;
  return 1 + countNodesRecursive(head.next);
}

export { countNodesRecursive };
