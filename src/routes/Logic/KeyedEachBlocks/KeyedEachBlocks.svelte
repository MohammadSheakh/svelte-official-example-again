<script>
  import Thing from "./Thing.svelte";

  let things = [
    {id : 1, color : "lightpink"},
    {id : 2, color : "lightgreen"},
    {id : 3, color : "lightblue"},
  ];

  function handleClick() {
		things = things.slice(1);
	}
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Keyed Each Blocks</h1>
  <div class="ml-[10%]">
    <button on:click={handleClick}> Remove first thing </button>

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 1em">
	<div>
		<h2>Keyed</h2>
		{#each things as thing (thing.id)}
			<Thing current={thing.color}  itemNum={thing.id}/>
		{/each}
	</div>

	<div>
		<h2>Unkeyed</h2>
		{#each things as thing}
			<Thing current={thing.color} itemNum={thing.id} />
		{/each}
	</div>
</div>

  </div>
</div>