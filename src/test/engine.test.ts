import { describe, it, expect } from 'vitest';
import { GeezEngine } from '../engine';

describe('GeezEngine', () => {
  it('should transform basic consonants', () => {
    const result = GeezEngine.transform('', '', 'h');
    expect(result.transformedValue).toBe('ህ');
    expect(result.newCursorPosition).toBe(1);
    expect(result.isReplacement).toBe(false);
  });

  it('should form syllables from consonants and vowels', () => {
    const result = GeezEngine.transform('ህ', '', 'a');
    expect(result.transformedValue).toBe('ሃ'); // 'a' maps to the 4th form (Rabee) in SYLLABLES['ህ']
    expect(result.newCursorPosition).toBe(1);
    expect(result.isReplacement).toBe(true);
  });

  it('should handle multi-character consonants', () => {
    const result = GeezEngine.transform('ስ', '', 'h');
    expect(result.transformedValue).toBe('ሽ');
    expect(result.newCursorPosition).toBe(1);
    expect(result.isReplacement).toBe(true);
  });

  it('should handle punctuation sequences', () => {
    // Stage 1: ":" -> "፡"
    const step1 = GeezEngine.transform('', '', ':');
    expect(step1.transformedValue).toBe('፡');
    
    // Stage 2: "፡" + ":" -> "።"
    const step2 = GeezEngine.transform(step1.transformedValue, '', ':');
    expect(step2.transformedValue).toBe('።');
    expect(step2.isReplacement).toBe(true);
  });

  it('should pass through unrecognized characters', () => {
    const result = GeezEngine.transform('hello', '', '!');
    expect(result.transformedValue).toBe('hello!');
    expect(result.newCursorPosition).toBe(6);
  });
});
