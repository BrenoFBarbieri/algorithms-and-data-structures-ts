/**
 * Data Structure: Singly Linked List Node
 *
 * Represents a single node in a linked list.
 *
 * Properties:
 * - val: value stored in the node
 * - next: reference to the next node
 *
 * Space Complexity per node: O(1)
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export { ListNode };
