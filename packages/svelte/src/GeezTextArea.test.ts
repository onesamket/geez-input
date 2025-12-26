import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import GeezTextArea from "./GeezTextArea.svelte";

describe("GeezTextArea", () => {
  it("should render a textarea element", () => {
    render(GeezTextArea);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDefined();
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("should bind value correctly", async () => {
    const user = userEvent.setup();
    const { component } = render(GeezTextArea, {
      props: { value: "" },
    });

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    await user.type(textarea, "hello world");

    // Check that the component's value prop is updated
    expect(component.value).toBe("hello world");
    expect(textarea.value).toBe("hello world");
  });

  it("should apply placeholder prop", () => {
    render(GeezTextArea, {
      props: { placeholder: "Enter your text here" },
    });

    const textarea = screen.getByPlaceholderText("Enter your text here");
    expect(textarea).toBeDefined();
    expect(textarea.getAttribute("placeholder")).toBe("Enter your text here");
  });

  it("should apply className prop", () => {
    render(GeezTextArea, {
      props: { className: "custom-textarea-class" },
    });

    const textarea = screen.getByRole("textbox");
    expect(textarea.className).toContain("custom-textarea-class");
  });

  it("should default mode to 'geez'", () => {
    render(GeezTextArea);
    const textarea = screen.getByRole("textbox");

    // The mode is used by the useGeez action, so we verify the component renders
    // Actual transformation testing is done in use-geez tests
    expect(textarea).toBeDefined();
  });

  it("should allow mode prop to be set", () => {
    render(GeezTextArea, {
      props: { mode: "latin" },
    });

    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDefined();
  });

  it("should transform Latin to Geez when mode is 'geez'", async () => {
    const user = userEvent.setup();
    const { component } = render(GeezTextArea, {
      props: { mode: "geez", value: "" },
    });

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    // Type 'h' - should transform to 'ህ'
    await user.type(textarea, "h");

    // Wait a bit for the transformation to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check that transformation occurred
    expect(textarea.value).toBe("ህ");
    expect(component.value).toBe("ህ");
  });

  it("should not transform when mode is 'latin'", async () => {
    const user = userEvent.setup();
    const { component } = render(GeezTextArea, {
      props: { mode: "latin", value: "" },
    });

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    await user.type(textarea, "h");

    // Should remain as Latin 'h'
    expect(textarea.value).toBe("h");
    expect(component.value).toBe("h");
  });

  it("should handle initial value prop", () => {
    render(GeezTextArea, {
      props: { value: "initial text content" },
    });

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    expect(textarea.value).toBe("initial text content");
  });

  it("should handle multiline text", async () => {
    const user = userEvent.setup();
    const { component } = render(GeezTextArea, {
      props: { value: "" },
    });

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    await user.type(textarea, "line 1{Enter}line 2");

    expect(textarea.value).toContain("line 1");
    expect(textarea.value).toContain("line 2");
    expect(component.value).toContain("line 1");
  });

  it("should forward rest props to textarea element", () => {
    render(GeezTextArea, {
      props: {
        rows: 10,
        cols: 50,
        disabled: true,
        required: true,
      },
    });

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    expect(textarea.rows).toBe(10);
    expect(textarea.cols).toBe(50);
    expect(textarea.disabled).toBe(true);
    expect(textarea.required).toBe(true);
  });

  it("should handle value changes from parent component", async () => {
    const { component } = render(GeezTextArea, {
      props: { value: "initial content" },
    });

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    expect(textarea.value).toBe("initial content");
    expect(component.value).toBe("initial content");

    // Update the value prop
    component.$set({ value: "updated content" });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(textarea.value).toBe("updated content");
    expect(component.value).toBe("updated content");
  });

  it("should form syllables correctly in textarea", async () => {
    const user = userEvent.setup();
    const { component } = render(GeezTextArea, {
      props: { mode: "geez", value: "" },
    });

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    // Type 'h' -> 'ህ', then 'a' -> should form syllable 'ሀ'
    await user.type(textarea, "h");
    await new Promise((resolve) => setTimeout(resolve, 50));

    await user.type(textarea, "a");
    await new Promise((resolve) => setTimeout(resolve, 50));

    // Should have formed the syllable
    expect(textarea.value).toBe("ሀ");
    expect(component.value).toBe("ሀ");
  });

  it("should handle special keys (Backspace, Delete, Arrows) without transformation", async () => {
    const user = userEvent.setup();
    const { component } = render(GeezTextArea, {
      props: { mode: "geez", value: "test content" },
    });

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    // Position cursor at start
    textarea.setSelectionRange(0, 0);

    // Press right arrow - should not transform
    await user.keyboard("{ArrowRight}");
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(textarea.value).toBe("test content");

    // Press Backspace - should delete character, not transform
    await user.keyboard("{Backspace}");
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(textarea.value).toBe("est content");
    expect(component.value).toBe("est content");
  });
});
