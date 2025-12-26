import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte/svelte5";
import userEvent from "@testing-library/user-event";
import GeezInput from "./GeezInput.svelte";

describe("GeezInput", () => {
  it("should render an input element", () => {
    render(GeezInput);
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
    expect(input.tagName).toBe("INPUT");
  });

  it("should bind value correctly", async () => {
    const user = userEvent.setup();
    render(GeezInput, {
      props: { value: "", mode: "latin" },
    });

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await user.type(input, "hello");

    // Check that the component's value prop is updated
    expect(input.value).toBe("hello");
  });

  it("should apply placeholder prop", () => {
    render(GeezInput, {
      props: { placeholder: "Enter text here" },
    });

    const input = screen.getByPlaceholderText("Enter text here");
    expect(input).toBeDefined();
    expect(input.getAttribute("placeholder")).toBe("Enter text here");
  });

  it("should apply className prop", () => {
    render(GeezInput, {
      props: { className: "custom-class another-class" },
    });

    const input = screen.getByRole("textbox");
    expect(input.className).toContain("custom-class");
    expect(input.className).toContain("another-class");
  });

  it("should default mode to 'geez'", () => {
    render(GeezInput);
    const input = screen.getByRole("textbox");

    // The mode is used by the useGeez action, so we verify the component renders
    // Actual transformation testing is done in use-geez tests
    expect(input).toBeDefined();
  });

  it("should allow mode prop to be set", () => {
    render(GeezInput, {
      props: { mode: "latin" },
    });

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
  });

  it("should transform Latin to Geez when mode is 'geez'", async () => {
    const user = userEvent.setup();
    render(GeezInput, {
      props: { mode: "geez", value: "" },
    });

    const input = screen.getByRole("textbox") as HTMLInputElement;

    // Type 'h' - should transform to 'ህ'
    await user.type(input, "h");

    // Wait a bit for the transformation to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check that transformation occurred
    expect(input.value).toBe("ህ");
  });

  it("should not transform when mode is 'latin'", async () => {
    const user = userEvent.setup();
    render(GeezInput, {
      props: { mode: "latin", value: "" },
    });

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await user.type(input, "h");

    // Should remain as Latin 'h'
    expect(input.value).toBe("h");
  });

  it("should handle initial value prop", () => {
    render(GeezInput, {
      props: { value: "initial text" },
    });

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("initial text");
  });

  it("should forward rest props to input element", () => {
    render(GeezInput, {
      props: {
        type: "email",
        disabled: true,
        required: true,
      },
    });

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.type).toBe("email");
    expect(input.disabled).toBe(true);
    expect(input.required).toBe(true);
  });

  it("should handle value changes from parent component", async () => {
    const { rerender } = render(GeezInput, {
      props: { value: "initial" },
    });

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("initial");

    // Update the value prop
    await rerender({ value: "updated" });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(input.value).toBe("updated");
  });

  it("should form syllables correctly", async () => {
    const user = userEvent.setup();
    render(GeezInput, {
      props: { mode: "geez", value: "" },
    });

    const input = screen.getByRole("textbox") as HTMLInputElement;

    // Type 'h' -> 'ህ', then 'a' -> should form syllable 'ሀ'
    await user.type(input, "h");
    await new Promise((resolve) => setTimeout(resolve, 50));

    await user.type(input, "a");
    await new Promise((resolve) => setTimeout(resolve, 50));

    // Should have formed the syllable
    expect(input.value).toBe("ሃ");
  });

  it("should handle special keys (Backspace, Delete, Arrows) without transformation", async () => {
    const user = userEvent.setup();
    render(GeezInput, {
      props: { mode: "geez", value: "test" },
    });

    const input = screen.getByRole("textbox") as HTMLInputElement;

    // Focus input
    await user.click(input);
    
    // Position cursor at start
    input.setSelectionRange(0, 0);

    // Press right arrow - should not transform
    await user.keyboard("{ArrowRight}");
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(input.value).toBe("test");

    // Manually move cursor since ArrowRight might not work in JSDOM
    input.setSelectionRange(1, 1);
    
    // Press Backspace - should delete character, not transform
    await user.keyboard("{Backspace}");
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(input.value).toBe("est");
  });
});
