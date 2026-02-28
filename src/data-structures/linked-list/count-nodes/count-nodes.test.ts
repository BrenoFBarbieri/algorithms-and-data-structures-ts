import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { UtilsLinkedList } from "../utils/linked-list.utils.js";
import { countNodesIterative } from "./count-nodes.iterative.js";
import { countNodesRecursive } from "./count-nodes.recursive.js";

const CountNodes = {
  iterative: countNodesIterative,
  recursive: countNodesRecursive,
};

describe("Linked List - Count Nodes (Iterative)", () => {
  it("should return 0 for empty list", () => {
    const head = UtilsLinkedList.create([]);
    assert.equal(CountNodes.iterative(head), 0);
  });

  it("should return correct length for multiple elements", () => {
    const head = UtilsLinkedList.create([1, 2, 3, 4]);
    assert.equal(CountNodes.iterative(head), 4);
  });
});

describe("Linked List - Count Nodes (Recursive)", () => {
  it("should return 0 for empty list", () => {
    const head = UtilsLinkedList.create([]);
    assert.equal(CountNodes.recursive(head), 0);
  });

  it("should return correct length for multiple elements", () => {
    const head = UtilsLinkedList.create([1, 2, 3, 4]);
    assert.equal(CountNodes.recursive(head), 4);
  });
});

describe("Linked List - Count Nodes Consistency", () => {
  it("iterative and recursive implementations should return the same result", () => {
    const head = UtilsLinkedList.create([10, 20, 30, 40, 50]);

    const iterative = CountNodes.iterative(head);
    const recursive = CountNodes.recursive(head);

    assert.equal(iterative, recursive);
  });
});
