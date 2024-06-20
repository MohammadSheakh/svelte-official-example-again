<script>
	let questions = [
		{ id: 1, text: `Where did you go to school?` },
		{ id: 2, text: `What is your mother's name?` },
		{ id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
	];

	
	let selected;

	let answer = '';

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<div>
  <h1 class="text-yellow-800 font-semibold ">Select Bindings</h1>
  <div class="ml-[10%] flex flex-col text-red-400 font-bold">
		Problem

</div>
</div>