/**
 * Exercise: Merge Two Sorted Linked Lists (Descending Order).
 *
 * Description:
 * - Implement a function that recursively merges two singly linked lists
 *   sorted in descending order into a single descending list.
 * - The merge is performed by selecting the larger head at each step
 *   and recursively resolving the remainder.
 *
 * Pattern: Divide and Conquer (Two-Pointer Recursion).
 * Approach: Recursive.
 *
 * Time Complexity: O(n + m).
 * - Each node from both lists is processed exactly once.
 * - n = length of l1, m = length of l2.
 *
 * Space Complexity: O(n + m) (due to call stack).
 * - One recursive call per node in the worst case.
 * - Stack depth grows linearly with total number of nodes.
 *
 * Trade-offs:
 * - More concise and declarative than the iterative version.
 * - Naturally expresses the structural similarity between subproblems.
 * - Additional memory overhead from recursion stack.
 * - Risk of stack overflow for very large lists.
 * - Mutates original lists by relinking nodes (destructive merge).
 *
 * Edge Cases:
 * - One list is null → returns the other list.
 * - Both lists are null → returns null.
 * - Equal values → stability preserved due to >= comparison.
 *
 * Best Use Case:
 * - Small to moderately sized lists.
 * - Educational scenarios emphasizing recursive decomposition.
 * - When clarity and structural symmetry are prioritized over stack efficiency.
 *
 * Technical Insight:
 * - Base cases handle exhaustion of either list.
 * - Recursive step:
 *     - Select the larger node (for descending order).
 *     - Recursively merge the remaining portion.
 *     - Rewire the `next` pointer during stack unwinding.
 *
 * Invariant:
 * - Each recursive call returns the head of a correctly
 *   merged descending sublist.
 * - At any frame, the returned node becomes the head
 *   of the merged result for that subproblem.
 *
 * Note:
 * - In JavaScript environments, deep recursion may exceed
 *   maximum call stack limits for large inputs.
 */

import type { ListNode } from "../ListNode.js";

function mergeTwoListDescendingOrderRecursive(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val >= l2.val) {
        l1.next = mergeTwoListDescendingOrderRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListDescendingOrderRecursive(l1, l2.next);
        return l2;
    }
}

export { mergeTwoListDescendingOrderRecursive };
