import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { UtilsLinkedList } from "../utils/linked-list.utils.js";
import { getLastValueIterative } from "./get-last-value.iterative.js";
import { getLastValueRecursive } from "./get-last-value.recursive.js";

const GetLastValue = {
  iterative: getLastValueIterative,
  recursive: getLastValueRecursive,
};

describe("Linked List - Get Last Value (Iterative)", () => {
  it("should return null for empty list", () => {
    const head = UtilsLinkedList.create([]);
    assert.equal(GetLastValue.iterative(head), null);
  });

  it("should return the value for single element list", () => {
    const head = UtilsLinkedList.create([42]);
    assert.equal(GetLastValue.iterative(head), 42);
  });

  it("should return last value for multiple elements", () => {
    const head = UtilsLinkedList.create([1, 2, 3, 4]);
    assert.equal(GetLastValue.iterative(head), 4);
  });
});

describe("Linked List - Get Last Value (Recursive)", () => {
  it("should return null for empty list", () => {
    const head = UtilsLinkedList.create([]);
    assert.equal(GetLastValue.recursive(head), null);
  });

  it("should return the value for single element list", () => {
    const head = UtilsLinkedList.create([42]);
    assert.equal(GetLastValue.recursive(head), 42);
  });

  it("should return last value for multiple elements", () => {
    const head = UtilsLinkedList.create([1, 2, 3, 4]);
    assert.equal(GetLastValue.recursive(head), 4);
  });
});

describe("Linked List - Get Last Value Consistency", () => {
  it("iterative and recursive implementations should return the same result", () => {
    const head = UtilsLinkedList.create([10, 20, 30, 40, 50]);

    const iterative = GetLastValue.iterative(head);
    const recursive = GetLastValue.recursive(head);

    assert.equal(iterative, recursive);
  });
});
