<script>
  import { tick } from "svelte";

  let text = 'select some text  and hit the tab key to toggle uppercase';

  async function handleKeydown(event) {
		if (event.key !== 'Tab') return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);

    // Check if the Shift key is pressed
    let replacement = event.shiftKey
      ? selection.toLowerCase()
      : selection.toUpperCase();


		replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

		text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>
<div>
  <h1 class="text-yellow-800 font-semibold">tick</h1>
  <div class="ml-[10%]">

<textarea value={text} class="border border-2 w-[500px] rounded-lg p-1" on:keydown={handleKeydown} />

</div>
</div>
<style>
	textarea {
		width: 60%;
		height: 100px;
	}
</style>
