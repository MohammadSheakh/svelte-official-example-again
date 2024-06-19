<script>
  let count = 0;
  function handleClick() {
    count +=1;
  }
</script>

<h1 class="text-yellow-800 font-semibold">Reactive Assignment</h1>
<button on:click={handleClick} class="border border-2 border-blue-300 p-1 rounded-lg ml-[10%]">
  Clicked {count} {count === 1 ? 'time' : 'times'} 
</button>

