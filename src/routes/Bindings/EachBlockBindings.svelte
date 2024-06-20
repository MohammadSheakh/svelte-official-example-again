<script>
	let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter((t) => !t.done);
	}

	$: remaining = todos.filter((t) => !t.done).length;
</script>

<div>
  <h1 class="text-yellow-800 font-semibold ">Each Block Bindings</h1>
  <div class="ml-[10%] flex flex-col ">

<h1>Todos</h1>

{#each todos as todo}
	<div>
		<input type="checkbox" bind:checked={todo.done} />

		<input placeholder="What needs to be done?" bind:value={todo.text} disabled={todo.done} />
	</div>
{/each}

<p>{remaining} remaining</p>

<button on:click={add} class="border w-[10%] border-2 border-blue-300 p-1 rounded-lg ml-[10%]"> Add new </button>

<button on:click={clear} class="border w-[20%] border-2 border-yellow-300 hover:border-red-900 hover:bg-red-900 hover:text-white p-1 rounded-lg ml-[10%]"> Clear completed </button>
</div>
</div>