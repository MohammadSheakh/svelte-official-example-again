<script>
  import Nested from "./Nested.svelte";
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Declaring Props</h1>
  <div class="ml-[10%]">
  <Nested answer="ANY VALUE"/>
  <Nested />   <!-- default props -->
  </div>
</div>