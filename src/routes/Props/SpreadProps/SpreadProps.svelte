<script>
  import Info from "./Info.svelte";
  const pkg = {
    name: "Svelte",
    version: "3.0.0",
    speed: "blazing fast",
    website: "https://svelte.dev",
  
  };

</script>


<h1 class="text-yellow-800 font-semibold">Spread Props</h1>
<div class="ml-[10%]">
    <Info {...pkg} />
</div>