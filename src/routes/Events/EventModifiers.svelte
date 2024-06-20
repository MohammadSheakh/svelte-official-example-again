<script>
	function handleClick() {
		alert('no more alerts');
	}
</script>
<div>
  <h1 class="text-yellow-800 font-semibold ">Event Modifiers</h1>
  <div class="ml-[10%] flex ">
    
<button on:click|once={handleClick} class="border border-2 border-blue-300 p-1 rounded-lg ml-[10%]"> 
  One Time Alert
 </button>
 </div>
 </div>
