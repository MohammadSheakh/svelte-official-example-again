<script>
	// import { marked } from 'marked'; 🔴
	let text = `Some words are *italic*, some are **bold**`;
</script>


<div>
  <h1 class="text-yellow-800 font-semibold ">Text Area Inputs</h1>
  <div class="ml-[10%] flex flex-col ">

<textarea bind:value={text}  class="border border-2 w-[500px] rounded-lg p-1"/>

<!-- {@html marked(text)} 🔴-->

</div>
</div>
<!-- <style>
	textarea {
		width: 100%;
		height: 200px;
	}
</style> -->

