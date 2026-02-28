/**
 * Exercise: Count the Number of Nodes.
 *
 * Description:
 * - Implement a function that counts the number of nodes
 *   in a singly linked list.
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
 * - Slightly more verbose than recursive version.
 *
 * Best Use Case:
 * - Large linear structures (e.g., linked lists, arrays).
 * - Scenarios where input size may grow significantly.
 */

import type { ListNode } from "../ListNode.js";

function countNodesIterative(head: ListNode | null): number {
  let count = 0;

  while (head) {
    count++;
    head = head.next;
  }

  return count;
}

export { countNodesIterative };
