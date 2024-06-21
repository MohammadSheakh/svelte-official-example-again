<script>
	import {count} from './stores';

	function decrement() {
		count.update((n) => n - 1);
	}
</script>

<button  on:click={decrement} class="border border-2 border-blue-300 p-1 rounded-lg font-bold text-2xl"> - </button>
