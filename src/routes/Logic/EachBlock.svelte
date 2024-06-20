<script>
  let cat = [
    {id : 1, name : "cat 1"},
    {id : 2, name : "cat 2"},
    {id : 3, name : "cat 3"},
  ];
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Each Block</h1>
  <div class="ml-[10%]">
    <ul>
      {#each cat as {id, name}, i}
        <li>
          {id}, {name}
        </li>
      {/each}
    </ul>
  </div>
</div>