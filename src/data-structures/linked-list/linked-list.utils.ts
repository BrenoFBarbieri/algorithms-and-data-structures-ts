import { ListNode } from "./ListNode.js";

/**
 * Creates a linked list from an array
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function createLinkedList(values: number[]): ListNode | null {
  if (!values.length) return null;

  let head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

export const UtilsLinkedList = {
  create: createLinkedList,
};
