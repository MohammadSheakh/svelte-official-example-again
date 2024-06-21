<script>
	import { time } from './stores.js';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Readable Stores</h1>
  <div class="ml-[10%]">
<h1>The time is {formatter.format($time)}</h1>
</div>
</div>  