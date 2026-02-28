import { ListNode } from "./ListNode.js";

/**
 * Creates a linked list from an array
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function create(values: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  for (const value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

function toArray(head: ListNode | null): number[] {
  const values: number[] = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  return values;
}

export const UtilsLinkedList = {
  create,
  toArray,
};
