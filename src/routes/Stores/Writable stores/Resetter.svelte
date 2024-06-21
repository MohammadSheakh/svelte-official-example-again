<script>
	import {count} from './stores';

	function reset() {
		count.set(0);
	}
</script>

<button on:click={reset} class="border border-2 border-blue-300 p-1 rounded-lg font-semibold text-xl"> reset </button>