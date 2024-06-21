<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Tweened Progress Bar</h1>
  <div class="ml-[10%]">

<progress value={$progress} class="w-[40%] flex "/>
<div class="mt-3">
	
<button on:click={() => progress.set(0)} class="border border-2 border-blue-300 p-1 rounded-lg "> 0% </button>

<button on:click={() => progress.set(0.25)} class="border border-2 border-blue-300 p-1 rounded-lg "> 25% </button>

<button on:click={() => progress.set(0.5)} class="border border-2 border-blue-300 p-1 rounded-lg "> 50% </button>

<button on:click={() => progress.set(0.75)} class="border border-2 border-blue-300 p-1 rounded-lg "> 75% </button>

<button on:click={() => progress.set(1)} class="border border-2 border-blue-300 p-1 rounded-lg "> 100% </button>

</div>

</div>  
</div>
