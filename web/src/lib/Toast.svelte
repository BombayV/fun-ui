<script lang="ts">
  import { Toast } from "flowbite-svelte";
  export let message = "Hello world!";
  export let data: object;
</script>

<Toast {...data}>
  {@html message}
</Toast>