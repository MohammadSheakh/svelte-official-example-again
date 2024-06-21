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
	
<button on:click={() => progress.set(0)} class="customBtn"> 0% </button>

<button on:click={() => progress.set(0.25)} class="customBtn"> 25% </button>

<button on:click={() => progress.set(0.5)} class="customBtn"> 50% </button>

<button on:click={() => progress.set(0.75)} class="customBtn"> 75% </button>

<button on:click={() => progress.set(1)} class="customBtn"> 100% </button>

</div>

</div>  
</div>
