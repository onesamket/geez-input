import { createFileRoute } from '@tanstack/react-router';
import CodeBlock from '../../components/code-block';

export const Route = createFileRoute('/docs/core')({
  component: CorePage,
});

function CorePage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-[#f6f7f9] mb-6">Core Engine</h1>
      
      <p className="text-lg text-[#ebecf0] mb-8 leading-relaxed">
        The core engine is framework-agnostic and can be used with any JavaScript framework or
        vanilla JavaScript. It provides the phonetic transformation logic without any framework
        dependencies.
      </p>

      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Overview</h2>
        <p className="text-[#ebecf0] mb-6">
          The core engine exports a <code className="bg-[#343a46] px-1.5 py-0.5 rounded text-sm">GeezEngine</code> class with a
          static <code className="bg-[#343a46] px-1.5 py-0.5 rounded text-sm">transform</code> method that handles the phonetic
          conversion.
        </p>
        <CodeBlock
          code={`import { GeezEngine } from "geez-input/core";

const result = GeezEngine.transform("h", "", "a");
// result.transformedValue === "ሀ"
// result.newCursorPosition === 1
// result.isReplacement === true`}
          language="ts"
          filename="transform.ts"
        />
      </section>

      <section id="api" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">API Reference</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">GeezEngine.transform()</h3>
          <p className="text-[#ebecf0] mb-4">
            Transforms input based on a new key press.
          </p>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#f6f7f9] mb-2">Parameters</h4>
            <ul className="list-disc list-inside space-y-2 text-[#ebecf0] ml-4">
              <li>
                <code className="bg-[#343a46] px-1.5 py-0.5 rounded text-sm">textBeforeCursor: string</code> - Text content before the cursor position
              </li>
              <li>
                <code className="bg-[#343a46] px-1.5 py-0.5 rounded text-sm">textAfterCursor: string</code> - Text content after the cursor position
              </li>
              <li>
                <code className="bg-[#343a46] px-1.5 py-0.5 rounded text-sm">key: string</code> - The character key that was pressed
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#f6f7f9] mb-2">Returns</h4>
            <CodeBlock
              code={`{
  transformedValue: string;  // The complete transformed text value
  newCursorPosition: number; // The new cursor position after transformation
  isReplacement: boolean;    // Whether this transformation replaced existing characters
}`}
              language="ts"
            />
          </div>
        </div>
      </section>

      <section id="integration" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Integration Examples</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">Vanilla JavaScript</h3>
          <p className="text-[#ebecf0] mb-4">
            Use the core engine with vanilla JavaScript inputs.
          </p>
          <CodeBlock
            code={`import { GeezEngine } from "geez-input/core";

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  // Skip special keys
  if (e.key.length !== 1 || e.ctrlKey || e.metaKey) return;

  e.preventDefault();

  const target = e.target;
  const { selectionStart, selectionEnd, value } = target;

  const before = value.substring(0, selectionStart || 0);
  const after = value.substring(selectionEnd || 0);

  const result = GeezEngine.transform(before, after, e.key);

  target.value = result.transformedValue;
  target.setSelectionRange(
    result.newCursorPosition,
    result.newCursorPosition
  );
});`}
            language="ts"
            filename="vanilla-js.ts"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">Vue.js</h3>
          <p className="text-[#ebecf0] mb-4">
            Example integration with Vue.js.
          </p>
          <CodeBlock
            code={`<template>
  <input
    :value="value"
    @keydown="handleKeyDown"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GeezEngine } from 'geez-input/core';

const value = ref('');

function handleKeyDown(e: KeyboardEvent) {
  if (e.key.length !== 1 || e.ctrlKey || e.metaKey) return;
  
  e.preventDefault();
  
  const input = e.target as HTMLInputElement;
  const { selectionStart, selectionEnd } = input;
  
  const before = value.value.substring(0, selectionStart || 0);
  const after = value.value.substring(selectionEnd || 0);
  
  const result = GeezEngine.transform(before, after, e.key);
  
  value.value = result.transformedValue;
  
  nextTick(() => {
    input.setSelectionRange(
      result.newCursorPosition,
      result.newCursorPosition
    );
  });
}

function handleInput(e: Event) {
  // Handle regular input if needed
}
</script>`}
            language="vue"
            filename="MyInput.vue"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">Svelte</h3>
          <p className="text-[#ebecf0] mb-4">
            Example integration with Svelte.
          </p>
          <CodeBlock
            code={`<script lang="ts">
  import { GeezEngine } from 'geez-input/core';
  
  let value = '';
  let inputElement: HTMLInputElement;
  
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key.length !== 1 || e.ctrlKey || e.metaKey) return;
    
    e.preventDefault();
    
    const { selectionStart, selectionEnd } = inputElement;
    
    const before = value.substring(0, selectionStart || 0);
    const after = value.substring(selectionEnd || 0);
    
    const result = GeezEngine.transform(before, after, e.key);
    
    value = result.transformedValue;
    
    setTimeout(() => {
      inputElement.setSelectionRange(
        result.newCursorPosition,
        result.newCursorPosition
      );
    }, 0);
  }
</script>

<input
  bind:this={inputElement}
  bind:value
  on:keydown={handleKeyDown}
/>`}
            language="svelte"
            filename="MyInput.svelte"
          />
        </div>
      </section>
    </div>
  );
}

