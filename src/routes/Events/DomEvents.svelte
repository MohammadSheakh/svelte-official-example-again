<script>
  let m1 = {
    x : 0,
    y : 0
  }
  let m2 = {
    x : 0,
    y : 0
  }
  function handleMouseMove(event){
    m1.x = event.clientX;
    m1.y = event.clientY;
  
  }
  function handleMouseLeave(){
    m1.x = 0;
    m1.y = 0;
  }
</script>

<div>
  <h1 class="text-yellow-800 font-semibold ">Dom Events</h1>
  <div class="ml-[10%] flex ">
    <div>
      <div class="w-[150px]  h-[50px] border border-2 " on:mousemove={handleMouseMove} on:mouseleave={handleMouseLeave}>
        
      </div>
      The mouse position is {m1.x} x {m1.y}
  
    </div>
    
    example of inline Inline Handler
    <div>
      <div class="w-[150px] h-[50px] border border-2" on:mousemove={(e) => {
        m2.x = e.clientX;
        m2.y = e.clientY;
      }} on:mouseleave={handleMouseLeave}>
        
      </div>
      The mouse position is {m2.x} x {m2.y}
    </div>
    

  </div>
</div>