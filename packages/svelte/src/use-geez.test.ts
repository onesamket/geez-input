import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { useGeez } from "./use-geez";
import type { EngineResult } from "geez-input/core";

describe("useGeez action", () => {
  let input: HTMLInputElement;
  let textarea: HTMLTextAreaElement;

  beforeEach(() => {
    // Create test elements
    input = document.createElement("input");
    textarea = document.createElement("textarea");
    document.body.appendChild(input);
    document.body.appendChild(textarea);
  });

  afterEach(() => {
    // Cleanup
    if (input.parentNode) {
      document.body.removeChild(input);
    }
    if (textarea.parentNode) {
      document.body.removeChild(textarea);
    }
  });

  it("should attach to input element", () => {
    const cleanup = useGeez(input, { mode: "geez" });
    expect(input).toBeDefined();
    cleanup.destroy();
  });

  it("should attach to textarea element", () => {
    const cleanup = useGeez(textarea, { mode: "geez" });
    expect(textarea).toBeDefined();
    cleanup.destroy();
  });

  it("should transform single consonant in geez mode", () => {
    const cleanup = useGeez(input, { mode: "geez" });

    const event = new KeyboardEvent("keydown", {
      key: "h",
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);

    expect(input.value).toBe("ህ");
    cleanup.destroy();
  });

  it("should not transform in latin mode", () => {
    const cleanup = useGeez(input, { mode: "latin" });

    input.value = "test";
    input.setSelectionRange(4, 4);

    const event = new KeyboardEvent("keydown", {
      key: "h",
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);

    // Should not transform, just append
    expect(input.value).toBe("testh");
    cleanup.destroy();
  });

  it("should form syllables correctly", () => {
    const cleanup = useGeez(input, { mode: "geez" });

    // Type 'h' -> 'ህ'
    input.value = "";
    input.setSelectionRange(0, 0);
    const event1 = new KeyboardEvent("keydown", {
      key: "h",
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(event1);
    expect(input.value).toBe("ህ");

    // Type 'a' -> should form syllable 'ሀ'
    input.setSelectionRange(1, 1);
    const event2 = new KeyboardEvent("keydown", {
      key: "a",
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(event2);

    expect(input.value).toBe("ሀ");
    cleanup.destroy();
  });

  it("should allow special keys to pass through", () => {
    const cleanup = useGeez(input, { mode: "geez" });

    input.value = "test";
    input.setSelectionRange(4, 4);

    const specialKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
      "Tab",
    ];

    specialKeys.forEach((key) => {
      const event = new KeyboardEvent("keydown", {
        key,
        bubbles: true,
        cancelable: true,
      });

      const preventDefaultSpy = vi.spyOn(event, "preventDefault");
      input.dispatchEvent(event);

      // Special keys should not be prevented
      expect(preventDefaultSpy).not.toHaveBeenCalled();
    });

    cleanup.destroy();
  });

  it("should allow Ctrl/Cmd combinations to pass through", () => {
    const cleanup = useGeez(input, { mode: "geez" });

    input.value = "test";
    input.setSelectionRange(0, 4);

    const event = new KeyboardEvent("keydown", {
      key: "c",
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    const preventDefaultSpy = vi.spyOn(event, "preventDefault");
    input.dispatchEvent(event);

    // Ctrl+C should not be prevented
    expect(preventDefaultSpy).not.toHaveBeenCalled();

    cleanup.destroy();
  });

  it("should call onTransform callback when provided", async () => {
    const onTransform = vi.fn((result: EngineResult) => {
      expect(result.transformedValue).toBe("ህ");
    });

    const cleanup = useGeez(input, { mode: "geez", onTransform });

    input.value = "";
    input.setSelectionRange(0, 0);

    const event = new KeyboardEvent("keydown", {
      key: "h",
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);

    // Wait for any async operations
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(onTransform).toHaveBeenCalledTimes(1);
    cleanup.destroy();
  });

  it("should update options when update is called", () => {
    const cleanup = useGeez(input, { mode: "geez" });

    // Update to latin mode
    cleanup.update({ mode: "latin" });

    input.value = "test";
    input.setSelectionRange(4, 4);

    const event = new KeyboardEvent("keydown", {
      key: "h",
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);

    // Should not transform in latin mode
    expect(input.value).toBe("testh");

    cleanup.destroy();
  });

  it("should remove event listener on destroy", () => {
    const cleanup = useGeez(input, { mode: "geez" });

    input.value = "";
    input.setSelectionRange(0, 0);

    const event = new KeyboardEvent("keydown", {
      key: "h",
      bubbles: true,
      cancelable: true,
    });

    // Transform before destroy
    input.dispatchEvent(event);
    expect(input.value).toBe("ህ");

    // Destroy
    cleanup.destroy();

    // Reset value
    input.value = "";
    input.setSelectionRange(0, 0);

    // Should not transform after destroy (would remain as "h" if still listening)
    input.dispatchEvent(event);
    expect(input.value).toBe(""); // Should not transform
  });

  it("should handle cursor position correctly", async () => {
    const cleanup = useGeez(input, { mode: "geez" });

    input.value = "ህ";
    input.setSelectionRange(1, 1);

    const event = new KeyboardEvent("keydown", {
      key: "a",
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);

    // Wait for cursor position update
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Cursor should be positioned correctly after transformation
    expect(input.selectionStart).toBe(1);
    expect(input.selectionEnd).toBe(1);

    cleanup.destroy();
  });
});
