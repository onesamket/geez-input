// Setup file for bun test runner
// This sets up jsdom for DOM APIs
import { JSDOM } from "jsdom";
import "@testing-library/jest-dom";

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
  url: "http://localhost",
  pretendToBeVisual: true,
  resources: "usable",
});

// Set up global DOM objects
const { window } = dom;
const { document } = window;

// Make document and window available globally
globalThis.window = window as unknown as Window & typeof globalThis;
globalThis.document = document;
globalThis.navigator = window.navigator;
globalThis.HTMLInputElement = window.HTMLInputElement;
globalThis.HTMLTextAreaElement = window.HTMLTextAreaElement;
globalThis.HTMLElement = window.HTMLElement;
globalThis.Element = window.Element;
globalThis.Node = window.Node;
globalThis.Event = window.Event;
globalThis.KeyboardEvent = window.KeyboardEvent;
globalThis.InputEvent = window.InputEvent || (Event as any);
globalThis.MouseEvent = window.MouseEvent;

// Polyfill requestAnimationFrame
globalThis.requestAnimationFrame = ((callback: FrameRequestCallback) => {
  return setTimeout(callback, 16);
}) as typeof requestAnimationFrame;

globalThis.cancelAnimationFrame = ((id: number) => {
  clearTimeout(id);
}) as typeof cancelAnimationFrame;

// Make sure document.body exists
if (!document.body) {
  const body = document.createElement("body");
  document.documentElement.appendChild(body);
}
