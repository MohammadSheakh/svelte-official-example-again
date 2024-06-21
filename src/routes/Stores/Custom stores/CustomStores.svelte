<script>
	import { count } from './stores.js';
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Custom Stores</h1>
  <div class="ml-[10%]">

<h1>The count is {$count}</h1>

<button on:click={count.increment}   class="border border-2 border-blue-300 p-1 rounded-lg font-bold text-2xl">+</button>
<button on:click={count.decrement}   class="border border-2 border-blue-300 p-1 rounded-lg font-bold text-2xl">-</button>
<button on:click={count.reset}   class="border border-2 border-blue-300 p-1 rounded-lg font-bold text-2xl">reset</button>

</div>
</div>  