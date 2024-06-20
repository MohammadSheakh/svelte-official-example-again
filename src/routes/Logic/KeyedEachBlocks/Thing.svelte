<script>
	// `current` is updated whenever the prop value changes...
	export let current;
  export let itemNum;

	// ...but `initial` is fixed upon initialisation
	const initial = current;
</script>

<p>
	<span style="background-color: {initial}">initial {itemNum}</span>
	<span style="background-color: {current}">current {itemNum}</span>
</p>


