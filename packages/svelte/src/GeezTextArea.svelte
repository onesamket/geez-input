<script lang="ts">
  import { useGeez } from "./use-geez";

  interface Props {
    value?: string | $bindable();
    placeholder?: string;
    mode?: "geez" | "latin";
    className?: string;
  }

  let { value = $bindable(""), placeholder = "", mode = "geez", className = "" }: Props = $props();
</script>

<textarea
  bind:value
  {placeholder}
  class={className}
  use:useGeez={{ mode }}
  {...$restProps}
></textarea>

<style>
  /* Component styles can be added here if needed */
</style>

