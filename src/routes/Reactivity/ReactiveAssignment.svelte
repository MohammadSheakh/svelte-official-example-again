<script>
  let count = 0;
  function handleClick() {
    count +=1;
  }
</script>

<h1 class="text-yellow-800 font-semibold">Reactive Assignment</h1>
<button on:click={handleClick} class="ml-[10%] customBtn">
  Clicked {count} {count === 1 ? 'time' : 'times'} 
</button>

