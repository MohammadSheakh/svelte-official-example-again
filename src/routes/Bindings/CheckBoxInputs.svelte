<script>
	let yes = false;
</script>



<div>
  <h1 class="text-yellow-800 font-semibold ">Check box Inputs</h1>
  <div class="ml-[10%] flex ">

<label>
	<input type="checkbox" bind:checked={yes} class="mr-4"/>
</label>

{#if yes}
	<p>Checked.</p>
{:else}
	<p>Unchecked.</p>
{/if}

</div>
</div>

<!-- <button disabled={!yes}> Subscribe </button> -->