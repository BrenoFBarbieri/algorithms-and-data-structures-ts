/**
 * Exercise: Merge Two Sorted Linked Lists (Descending Order).
 *
 * Description:
 * - Implement a function that merges two singly linked lists
 *   sorted in descending order into a single descending list.
 * - The merge is performed iteratively using pointer manipulation.
 *
 * Pattern: Two-Pointer Technique.
 * Approach: Iterative with Dummy Head.
 *
 * Time Complexity: O(n + m).
 * - Each node from both lists is visited exactly once.
 * - n = length of l1, m = length of l2.
 *
 * Space Complexity: O(1).
 * - No additional data structures proportional to input size.
 * - Merge is done by reusing existing nodes.
 *
 * Trade-offs:
 * - Memory efficient (constant auxiliary space).
 * - Safe for large lists (no recursion stack growth).
 * - Mutates original lists by relinking nodes (destructive merge).
 * - Requires both input lists to already be sorted in descending order.
 *
 * Edge Cases:
 * - One list is null → returns the other list.
 * - Both lists are null → returns null.
 * - Lists with equal values → stability preserved due to >= comparison.
 *
 * Best Use Case:
 * - Merging pre-sorted linked lists efficiently.
 * - Core subroutine in divide-and-conquer algorithms like merge sort.
 * - Scenarios where in-place merging is preferred.
 *
 * Technical Insight:
 * - Uses a dummy head to simplify pointer handling and avoid
 *   special casing the first insertion.
 * - Maintains a `tail` pointer that always references
 *   the last node of the merged list.
 * - After one list is exhausted, the remaining portion
 *   of the other list is appended in O(1).
 *
 * Invariant:
 * - At every iteration, `dummy.next` points to a valid
 *   descending-ordered merged prefix.
 * - `tail` always references the last node of that prefix.
 */

import { ListNode } from "../ListNode.js";

function mergeTwoListDescendingOrderIterative(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val >= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }

        tail = tail.next;
    }

    tail.next = l1 ?? l2;

    return dummy.next;
}

export { mergeTwoListDescendingOrderIterative };
