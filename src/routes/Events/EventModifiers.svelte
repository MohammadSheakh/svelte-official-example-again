<script>
	function handleClick() {
		alert('no more alerts');
	}
</script>
<div>
  <h1 class="text-yellow-800 font-semibold ">Event Modifiers</h1>
  <div class="ml-[10%] flex ">
    
<button on:click|once={handleClick} class="customBtn"  > 
  One Time Alert
 </button>
 </div>
 </div>
