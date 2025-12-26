import { describe, it, expect } from "vitest";
import { GeezEngine } from "../core/engine";

describe("GeezEngine", () => {
  it("should transform basic consonants", () => {
    const result = GeezEngine.transform("", "", "h");
    expect(result.transformedValue).toBe("ህ");
    expect(result.newCursorPosition).toBe(1);
    expect(result.isReplacement).toBe(false);
  });

  it("should form syllables from consonants and vowels", () => {
    const result = GeezEngine.transform("ህ", "", "a");
    expect(result.transformedValue).toBe("ሃ"); // 'a' maps to the 4th form (Rabee) in SYLLABLES['ህ']
    expect(result.newCursorPosition).toBe(1);
    expect(result.isReplacement).toBe(true);
  });

  it("should handle multi-character consonants", () => {
    const result = GeezEngine.transform("ስ", "", "h");
    expect(result.transformedValue).toBe("ሽ");
    expect(result.newCursorPosition).toBe(1);
    expect(result.isReplacement).toBe(true);
  });

  it("should handle punctuation sequences", () => {
    // Stage 1: ":" -> "፡"
    const step1 = GeezEngine.transform("", "", ":");
    expect(step1.transformedValue).toBe("፡");

    // Stage 2: "፡" + ":" -> "።"
    const step2 = GeezEngine.transform(step1.transformedValue, "", ":");
    expect(step2.transformedValue).toBe("።");
    expect(step2.isReplacement).toBe(true);
  });

  it("should pass through unrecognized characters", () => {
    const result = GeezEngine.transform("hello", "", "!");
    expect(result.transformedValue).toBe("hello!");
    expect(result.newCursorPosition).toBe(6);
  });

  it("should convert vowel form to ee form (5th form/Hamis) when typing e after a vowel", () => {
    // Test "hie" sequence: h -> ህ, i -> ሂ, e -> ሄ
    const step1 = GeezEngine.transform("", "", "h");
    expect(step1.transformedValue).toBe("ህ");

    const step2 = GeezEngine.transform(step1.transformedValue, "", "i");
    expect(step2.transformedValue).toBe("ሂ");

    const step3 = GeezEngine.transform(step2.transformedValue, "", "e");
    expect(step3.transformedValue).toBe("ሄ"); // Should convert ሂ to ሄ (ee form)
    expect(step3.isReplacement).toBe(true);
  });

  it("should not convert base consonant to ee form when typing e directly", () => {
    // Test "he" sequence: h -> ህ, e -> ሀ (not ሄ)
    const step1 = GeezEngine.transform("", "", "h");
    expect(step1.transformedValue).toBe("ህ");

    const step2 = GeezEngine.transform(step1.transformedValue, "", "e");
    expect(step2.transformedValue).toBe("ሀ"); // Should be 'e' form, not 'ee' form
    expect(step2.isReplacement).toBe(true);
  });

  it("should handle multi-character Latin consonants like 'ch'", () => {
    // Test "ch" sequence: c -> c (pass through), h -> should combine to "ch" -> "ች"
    const step1 = GeezEngine.transform("", "", "c");
    expect(step1.transformedValue).toBe("c"); // 'c' alone passes through

    const step2 = GeezEngine.transform(step1.transformedValue, "", "h");
    expect(step2.transformedValue).toBe("ች"); // Should combine "c" + "h" to "ch" -> "ች"
    expect(step2.isReplacement).toBe(true);
  });

  it("should form syllables from multi-character consonants like 'ch'", () => {
    // Test "cha" sequence: c -> c, h -> "ch" -> "ች", a -> "ቻ"
    const step1 = GeezEngine.transform("", "", "c");
    expect(step1.transformedValue).toBe("c");

    const step2 = GeezEngine.transform(step1.transformedValue, "", "h");
    expect(step2.transformedValue).toBe("ች");

    const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
    expect(step3.transformedValue).toBe("ቻ"); // Should form syllable "ች" + "a" -> "ቻ"
    expect(step3.isReplacement).toBe(true);
  });
});
