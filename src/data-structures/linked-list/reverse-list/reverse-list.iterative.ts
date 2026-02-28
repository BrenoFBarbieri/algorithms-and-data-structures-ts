/**
 * Exercise: Reverse a Singly Linked List.
 *
 * Description:
 * - Implement a function that reverses a singly linked list
 *   in-place and returns the new head.
 *
 * Pattern: Linear Traversal with Pointer Rewiring.
 * Approach: Iterative (Three-Pointer Technique).
 *
 * Time Complexity: O(n).
 * - Each node is visited exactly once.
 * - All operations inside the loop are constant time O(1).
 *
 * Space Complexity: O(1).
 * - Reversal is done in-place.
 * - No additional data structures proportional to input size.
 *
 * Trade-offs:
 * - Highly memory efficient (constant auxiliary space).
 * - Safe for very large linked lists (no recursion stack growth).
 * - Mutates the original list structure (destructive operation).
 * - After execution, original head becomes the tail (next = null).
 *
 * Edge Cases:
 * - Empty list → returns null.
 * - Single node → returns the same node.
 *
 * Best Use Case:
 * - In-place reversal when memory constraints matter.
 * - Large datasets where recursion could cause stack overflow.
 * * - Performance-critical systems where predictable memory usage is required.
 *
 * Technical Insight:
 * - Maintains three references:
 *   1. `head` → current node being processed
 *   2. `prev` → previous node (new reversed link)
 *   3. `next` → temporary storage to avoid losing the remainder of the list
 *
 * - Core invariant:
 *   At each iteration:
 *     - `prev` points to the already reversed portion.
 *     - `head` points to the remaining unreversed portion.
 */

import type { ListNode } from "../ListNode.js";

function reverseListIterative(head: ListNode | null): ListNode | null {
  let prev = null;

  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

export { reverseListIterative };
