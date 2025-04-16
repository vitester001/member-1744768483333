import { describe, it, expect } from "vitest";
import { greet } from "./greet";

describe("greet", () => {
  it("should return a greeting with 'Hello' when no custom greeting is provided", () => {
    const result = greet("John");
    expect(result).toBe("Hello, John!");
  });

  it("should return a greeting with the provided custom greeting", () => {
    const result = greet("John", "Good morning");
    expect(result).toBe("Good morning, John!");
  });

  it("should handle an empty name with default greeting", () => {
    const result = greet("");
    expect(result).toBe("Hello, !");
  });

  it("should handle an empty name with custom greeting", () => {
    const result = greet("", "Hi");
    expect(result).toBe("Hi, !");
  });

  it("should handle special characters in the name with default greeting", () => {
    const result = greet("@John123");
    expect(result).toBe("Hello, @John123!");
  });

  it("should handle special characters in the name with custom greeting", () => {
    const result = greet("@John123", "Welcome");
    expect(result).toBe("Welcome, @John123!");
  });

  it("should handle numbers in the name with default greeting", () => {
    const result = greet("12345");
    expect(result).toBe("Hello, 12345!");
  });

  it("should handle numbers in the name with custom greeting", () => {
    const result = greet("12345", "Greetings");
    expect(result).toBe("Greetings, 12345!");
  });
});
