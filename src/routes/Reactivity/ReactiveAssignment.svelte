<script>
  let count = 0;
  function handleClick() {
    count +=1;
  }
</script>

<button on:click={handleClick} class="border border-2 p-1 rounded-lg">
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

