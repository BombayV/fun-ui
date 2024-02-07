<script lang="ts">
  import '@fontsource-variable/plus-jakarta-sans';
  import { onMount } from 'svelte';
  import handlers from "./lib/handlers";

  onMount(() => {
    console.log('mounted');
    console.log(handlers.toastHandler())
    console.log(handlers.toastHandler())
    console.log(handlers.toastHandler())
    console.log(handlers.toastHandler())
  });
</script>

<main>
</main>