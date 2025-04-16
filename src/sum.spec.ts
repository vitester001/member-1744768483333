import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("should return the sum of two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should return the sum of a positive and a negative number", () => {
    expect(sum(5, -3)).toBe(2);
  });

  it("should return the sum of two negative numbers", () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it("should return 0 when both numbers are 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("should return the same number when adding 0 to it", () => {
    expect(sum(7, 0)).toBe(7);
    expect(sum(0, 7)).toBe(7);
  });

  it("should handle large numbers correctly", () => {
    expect(sum(1_000_000, 2_000_000)).toBe(3_000_000);
  });

  it("should handle floating point numbers", () => {
    expect(sum(1.5, 2.3)).toBeCloseTo(3.8, 5);
  });

  it("should handle negative floating point numbers", () => {
    expect(sum(-1.5, -2.3)).toBeCloseTo(-3.8, 5);
  });

  it("should handle mixed floating point and integer values", () => {
    expect(sum(2, 3.5)).toBeCloseTo(5.5, 5);
    expect(sum(3.5, 2)).toBeCloseTo(5.5, 5);
  });
});
