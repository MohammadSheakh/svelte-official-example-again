<script>
	import { count } from './stores.js';
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Custom Stores</h1>
  <div class="ml-[10%]">

<h1>The count is {$count}</h1>

<button on:click={count.increment}   class="customBtn font-bold text-2xl">+</button>
<button on:click={count.decrement}   class="customBtn font-bold text-2xl">-</button>
<button on:click={count.reset}   class="customBtn font-bold text-2xl">reset</button>

</div>
</div>  