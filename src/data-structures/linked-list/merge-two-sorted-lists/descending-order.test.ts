import { describe, it } from "node:test";
import assert from "node:assert/strict";

import type { ListNode } from "../ListNode.js";
import { UtilsLinkedList } from "../utils/linked-list.utils.js";
import { mergeTwoListDescendingOrderIterative } from "./descending-order.iterative.js";
import { mergeTwoListDescendingOrderRecursive } from "./descending-order.recursive.js";

describe("Linked List - Merge Two Sorted Lists (Descending Order) (Iterative)", () => {
    describe("Valid Merge - Descending Order", () => {
        it("should merge two descending sorted lists", () => {
            const l1 = UtilsLinkedList.create([9, 7, 5]);
            const l2 = UtilsLinkedList.create([8, 6, 4]);

            const merged = mergeTwoListDescendingOrderIterative(l1, l2);

            assert.deepStrictEqual(
                UtilsLinkedList.toArray(merged),
                [9, 8, 7, 6, 5, 4],
            );
        });

        it("should handle different list sizes", () => {
            const l1 = UtilsLinkedList.create([10, 8]);
            const l2 = UtilsLinkedList.create([9, 7, 5, 3]);

            const merged = mergeTwoListDescendingOrderIterative(l1, l2);

            assert.deepStrictEqual(
                UtilsLinkedList.toArray(merged),
                [10, 9, 8, 7, 5, 3],
            );
        });

        it("should handle duplicates correctly", () => {
            const l1 = UtilsLinkedList.create([7, 5, 3]);
            const l2 = UtilsLinkedList.create([7, 4, 3]);

            const merged = mergeTwoListDescendingOrderIterative(l1, l2);

            assert.deepStrictEqual(
                UtilsLinkedList.toArray(merged),
                [7, 7, 5, 4, 3, 3],
            );
        });
    });

    describe("Edge Cases", () => {
        it("should return other list if one list is null", () => {
            const l1 = UtilsLinkedList.create([5, 3, 1]);

            const merged = mergeTwoListDescendingOrderIterative(l1, null);

            assert.deepStrictEqual(UtilsLinkedList.toArray(merged), [5, 3, 1]);
        });

        it("should return null if both lists are null", () => {
            const merged = mergeTwoListDescendingOrderIterative(null, null);

            assert.equal(merged, null);
        });
    });

    describe("Contract Validation", () => {
        it("should return ListNode or null", () => {
            const l1 = UtilsLinkedList.create([5, 3]);
            const l2 = UtilsLinkedList.create([4, 2]);

            const result = mergeTwoListDescendingOrderIterative(l1, l2);

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
            const l1 = UtilsLinkedList.create([9, 5]);
            const l2 = UtilsLinkedList.create([8, 6]);

            const originalNodes: ListNode[] = [];

            let current = l1;
            while (current) {
                originalNodes.push(current);
                current = current.next;
            }

            current = l2;
            while (current) {
                originalNodes.push(current);
                current = current.next;
            }

            const merged = mergeTwoListDescendingOrderIterative(l1, l2);

            const mergedNodes: ListNode[] = [];
            current = merged;

            while (current) {
                mergedNodes.push(current);
                current = current.next;
            }

            assert.equal(originalNodes.length, mergedNodes.length);

            for (const node of mergedNodes) {
                assert.ok(originalNodes.includes(node));
            }
        });
    });

    describe("Performance", () => {
        it("should handle large descending sorted lists", () => {
            const size = 5_000;

            const l1 = UtilsLinkedList.create(
                Array.from({ length: size }, (_, i) => size * 2 - i * 2),
            );

            const l2 = UtilsLinkedList.create(
                Array.from({ length: size }, (_, i) => size * 2 - (i * 2 + 1)),
            );

            const merged = mergeTwoListDescendingOrderIterative(l1, l2);
            const result = UtilsLinkedList.toArray(merged);

            assert.equal(result.length, size * 2);
            assert.equal(result[0], size * 2);
            assert.equal(result.at(-1), 1);
        });
    });
});

describe("Linked List - Merge Two Sorted Lists (Descending Order) (Recursive)", () => {
    describe("Valid Merge - Descending Order", () => {
        it("should merge two descending sorted lists", () => {
            const l1 = UtilsLinkedList.create([9, 7, 5]);
            const l2 = UtilsLinkedList.create([8, 6, 4]);

            const merged = mergeTwoListDescendingOrderRecursive(l1, l2);

            assert.deepStrictEqual(
                UtilsLinkedList.toArray(merged),
                [9, 8, 7, 6, 5, 4],
            );
        });

        it("should handle duplicates correctly", () => {
            const l1 = UtilsLinkedList.create([7, 5, 3]);
            const l2 = UtilsLinkedList.create([7, 4, 3]);

            const merged = mergeTwoListDescendingOrderRecursive(l1, l2);

            assert.deepStrictEqual(
                UtilsLinkedList.toArray(merged),
                [7, 7, 5, 4, 3, 3],
            );
        });
    });

    describe("Edge Cases", () => {
        it("should return null if both lists are null", () => {
            const merged = mergeTwoListDescendingOrderRecursive(null, null);

            assert.equal(merged, null);
        });
    });

    describe("Contract Validation", () => {
        it("should return ListNode or null", () => {
            const l1 = UtilsLinkedList.create([5, 3]);
            const l2 = UtilsLinkedList.create([4, 2]);

            const result = mergeTwoListDescendingOrderRecursive(l1, l2);

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
            const l1 = UtilsLinkedList.create([9, 5]);
            const l2 = UtilsLinkedList.create([8, 6]);

            const originalNodes: ListNode[] = [];

            let current = l1;
            while (current) {
                originalNodes.push(current);
                current = current.next;
            }

            current = l2;
            while (current) {
                originalNodes.push(current);
                current = current.next;
            }

            const merged = mergeTwoListDescendingOrderRecursive(l1, l2);

            const mergedNodes: ListNode[] = [];
            current = merged;

            while (current) {
                mergedNodes.push(current);
                current = current.next;
            }

            assert.equal(originalNodes.length, mergedNodes.length);

            for (const node of mergedNodes) {
                assert.ok(originalNodes.includes(node));
            }
        });
    });
});
