import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { UtilsLinkedList } from "./linked-list.utils.js";

describe("Linked List Utils - createLinkedList", () => {
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
