import { describe, it } from "node:test";
import assert from "node:assert/strict";

import type { ListNode } from "../ListNode.js";
import { UtilsLinkedList } from "../utils/linked-list.utils.js";
import { reverseListIterative } from "./reverse-list.iterative.js";
import { reverseListRecursive } from "./reverse-list.recursive.js";

describe("Linked List - reverseList (Iterative)", () => {
    describe("Valid Reversal", () => {
        it("should reverse multiple nodes", () => {
            const head = UtilsLinkedList.create([1, 2, 3, 4, 5]);

            const reversed = reverseListIterative(head);

            assert.deepStrictEqual(
                UtilsLinkedList.toArray(reversed),
                [5, 4, 3, 2, 1],
            );
        });

        it("should reverse two nodes", () => {
            const head = UtilsLinkedList.create([1, 2]);

            const reversed = reverseListIterative(head);

            assert.deepStrictEqual(UtilsLinkedList.toArray(reversed), [2, 1]);
        });

        it("should return same single node", () => {
            const head = UtilsLinkedList.create([42]);

            const reversed = reverseListIterative(head);

            assert.deepStrictEqual(UtilsLinkedList.toArray(reversed), [42]);
        });
    });

    describe("Edge Cases", () => {
        it("should return null when head is null", () => {
            const reversed = reverseListIterative(null);

            assert.equal(reversed, null);
        });
    });

    describe("Contract Validation", () => {
        it("should return ListNode or null", () => {
            const head = UtilsLinkedList.create([1, 2, 3]);

            const result = reverseListIterative(head);

            if (result !== null) {
                assert.equal(typeof result.val, "number");
                assert.ok("next" in result);
            } else {
                assert.equal(result, null);
            }
        });
    });

    describe("Structural Integrity", () => {
        it("should reuse original node references", () => {
            const head = UtilsLinkedList.create([1, 2, 3]);

            const originalNodes: ListNode[] = [];
            let current = head;

            while (current) {
                originalNodes.push(current);
                current = current.next;
            }

            const reversed = reverseListIterative(head);

            const reversedNodes: ListNode[] = [];
            current = reversed;

            while (current) {
                reversedNodes.push(current);
                current = current.next;
            }

            assert.equal(originalNodes.length, reversedNodes.length);

            for (const node of reversedNodes) {
                assert.ok(originalNodes.includes(node));
            }
        });
    });

    describe("Performance", () => {
        it("should handle large lists", () => {
            const size = 10_000;
            const values = Array.from({ length: size }, (_, i) => i);

            const head = UtilsLinkedList.create(values);
            const reversed = reverseListIterative(head);

            const result = UtilsLinkedList.toArray(reversed);

            assert.equal(result.length, size);
            assert.equal(result[0], size - 1);
            assert.equal(result.at(-1), 0);
        });
    });
});

describe("Linked List - reverseList (Recursive)", () => {
    describe("Valid Reversal", () => {
        it("should reverse multiple nodes", () => {
            const head = UtilsLinkedList.create([1, 2, 3, 4, 5]);

            const reversed = reverseListRecursive(head);

            assert.deepStrictEqual(
                UtilsLinkedList.toArray(reversed),
                [5, 4, 3, 2, 1],
            );
        });

        it("should reverse two nodes", () => {
            const head = UtilsLinkedList.create([1, 2]);

            const reversed = reverseListRecursive(head);

            assert.deepStrictEqual(UtilsLinkedList.toArray(reversed), [2, 1]);
        });

        it("should return same single node", () => {
            const head = UtilsLinkedList.create([42]);

            const reversed = reverseListRecursive(head);

            assert.deepStrictEqual(UtilsLinkedList.toArray(reversed), [42]);
        });
    });

    describe("Edge Cases", () => {
        it("should return null when head is null", () => {
            const reversed = reverseListRecursive(null);

            assert.equal(reversed, null);
        });
    });

    describe("Contract Validation", () => {
        it("should return ListNode or null", () => {
            const head = UtilsLinkedList.create([1, 2, 3]);

            const result = reverseListRecursive(head);

            if (result !== null) {
                assert.equal(typeof result.val, "number");
                assert.ok("next" in result);
            } else {
                assert.equal(result, null);
            }
        });
    });

    describe("Structural Integrity", () => {
        it("should reuse original node references", () => {
            const head = UtilsLinkedList.create([1, 2, 3]);

            const originalNodes: ListNode[] = [];
            let current = head;

            while (current) {
                originalNodes.push(current);
                current = current.next;
            }

            const reversed = reverseListRecursive(head);

            const reversedNodes: ListNode[] = [];
            current = reversed;

            while (current) {
                reversedNodes.push(current);
                current = current.next;
            }

            assert.equal(originalNodes.length, reversedNodes.length);

            for (const node of reversedNodes) {
                assert.ok(originalNodes.includes(node));
            }
        });
    });
});
