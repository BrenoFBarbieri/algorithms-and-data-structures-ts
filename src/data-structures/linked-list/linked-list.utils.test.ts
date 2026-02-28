import { describe, it } from "node:test";
import assert from "node:assert/strict";

import type { ListNode } from "./ListNode.js";
import { UtilsLinkedList } from "./linked-list.utils.js";

describe("Linked List Utils - create list", () => {
  it("should return null for empty array", () => {
    const head = UtilsLinkedList.create([]);
    assert.equal(head, null);
  });

  it("should create a single node list", () => {
    const head = UtilsLinkedList.create([42]);

    assert.equal(head?.val, 42);
    assert.equal(head?.next, null);
  });

  it("should correctly link multiple nodes", () => {
    const head = UtilsLinkedList.create([1, 2, 3]);

    assert.equal(head?.val, 1);
    assert.equal(head?.next?.val, 2);
    assert.equal(head?.next?.next?.val, 3);
    assert.equal(head?.next?.next?.next, null);
  });
});

describe("Linked List Utils - toArray", () => {
  describe("Edge Cases", () => {
    it("should return empty array when head is null", () => {
      const result = UtilsLinkedList.toArray(null);

      assert.deepStrictEqual(result, []);
    });
  });

  describe("Valid Conversions", () => {
    it("should convert single node list to array", () => {
      const head = UtilsLinkedList.create([42]);

      const result = UtilsLinkedList.toArray(head);

      assert.deepStrictEqual(result, [42]);
    });

    it("should convert multiple nodes list to array", () => {
      const values = [1, 2, 3, 4, 5];
      const head = UtilsLinkedList.create(values);

      const result = UtilsLinkedList.toArray(head);

      assert.deepStrictEqual(result, values);
    });
  });

  describe("Structural Integrity", () => {
    it("should not mutate the linked list", () => {
      const values = [1, 2, 3];
      const head = UtilsLinkedList.create(values);

      const originalNodes: ListNode[] = [];
      let current = head;

      while (current) {
        originalNodes.push(current);
        current = current.next;
      }

      UtilsLinkedList.toArray(head);

      const afterNodes: ListNode[] = [];
      current = head;

      while (current) {
        afterNodes.push(current);
        current = current.next;
      }

      assert.equal(originalNodes.length, afterNodes.length);

      for (let i = 0; i < originalNodes.length; i++) {
        assert.equal(originalNodes[i], afterNodes[i]);
      }
    });
  });
});
