<script>
	import {count} from './stores';

	function increment() {
		count.update((n) => n + 1);
		
	}
</script>

<button  class="border border-2 border-blue-300 p-1 rounded-lg font-bold text-2xl" on:click={increment}> + </button>
