/**
 * Exercise: Reverse a Singly Linked List.
 *
 * Description:
 * - Implement a function that reverses a singly linked list
 *   using recursion and returns the new head.
 *
 * Pattern: Linear Traversal with Pointer Rewiring.
 * Approach: Recursive (Post-order Reversal).
 *
 * Time Complexity: O(n).
 * - Each node is visited exactly once.
 * - Work per call is constant O(1).
 *
 * Space Complexity: O(n) (due to call stack).
 * - One recursive frame per node.
 * - Stack depth grows linearly with list size.
 *
 * Trade-offs:
 * - More expressive and declarative than the iterative approach.
 * - Simpler reasoning about reversal during stack unwinding.
 * - Additional memory overhead from recursion stack.
 * - Risk of stack overflow for very large linked lists.
 * - Mutates the original list structure (destructive operation).
 *
 * Edge Cases:
 * - Empty list → returns null.
 * - Single node → returns the same node (base case).
 *
 * Best Use Case:
 * - Small to moderately sized lists.
 * - Educational contexts for understanding recursion and stack unwinding.
 * - Scenarios prioritizing clarity over stack efficiency.
 *
 * Technical Insight:
 * - Recursion travels to the tail first (base case).
 * - During stack unwinding:
 *     - Each node reverses its next pointer.
 *     - The original head becomes the tail (next = null).
 * - The new head is determined at the deepest recursion level
 *   and propagated back through return values.
 *
 * Note:
 * - In JavaScript environments, deep recursion may exceed
 *   maximum call stack limits for very large inputs.
 */

import type { ListNode } from "./ListNode.js";

function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const next = head.next;
  const newHead = reverseListRecursive(next);

  next.next = head;
  head.next = null;

  return newHead;
}

export { reverseListRecursive };
