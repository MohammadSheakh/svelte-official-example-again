<script >

  import {count} from './stores'; 

	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let countValue;

  // 😥 -> can't understand
	const unsubscribe = count.subscribe((value) => {
		countValue = value;
	});
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Writable Stores</h1>
  <div class="ml-[10%]">

<h1>The count is {countValue}</h1>

<!-- // 😥 -> can't understand $count -->
<Incrementer />
<Decrementer />
<Resetter />

</div>
<h1 class="text-yellow-800 font-semibold">Auto Subscription</h1>
    <div class="ml-[10%]">
        <h1>The count is { $count}</h1>
    </div> 
</div>