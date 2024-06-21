<script>
  import "../app.css";
	import NestedComponents from "./Introduction/NestedComponents.svelte";
	import DeclaringProps from "./Props/DeclaringProps/DeclaringProps.svelte";
	import ReactiveAssignment from "./Reactivity/ReactiveAssignment.svelte";
  import ReactiveDeclarations from "./Reactivity/ReactiveDeclarations.svelte";
	import ReactiveStatements from "./Reactivity/ReactiveStatements.svelte";
  import SpreadingProps from "./Props/SpreadProps/SpreadProps.svelte";
	import IfBlock from "./Logic/IfBlock.svelte";
	import ElseBlock from "./Logic/ElseBlock.svelte";
	import EachBlock from "./Logic/EachBlock.svelte";
	import KeyedEachBlocks from "./Logic/KeyedEachBlocks/KeyedEachBlocks.svelte";
	import AwaitBlock from "./Logic/AwaitBlock.svelte";
	import DomEvents from "./Events/DomEvents.svelte";
	import EventModifiers from "./Events/EventModifiers.svelte";
	import TextInputs from "./Bindings/TextInputs.svelte";
	import NumericInputs from "./Bindings/NumericInputs.svelte";
	import CheckBoxInputs from "./Bindings/CheckBoxInputs.svelte";
	import GroupInputs from "./Bindings/GroupInputs.svelte";
	import TextAreaInputs from "./Bindings/TextAreaInputs.svelte";
	import FileInputs from "./Bindings/FileInputs.svelte";
	import SelectMultiple from "./Bindings/SelectMultiple.svelte";
	import SelectBindings from "./Bindings/SelectBindings.svelte";
	import EachBlockBindings from "./Bindings/EachBlockBindings.svelte";
	import OnMount from "./LifeCycle/onMount.svelte";
	import OnDestroy from "./LifeCycle/onDestroy/onDestroy.svelte";
	import BeforeUpdateandafterUpdate from "./LifeCycle/beforeUpdate and  afterUpdate.svelte";
	import Tick from "./LifeCycle/tick.svelte";
	import WritableStores from "./Stores/Writable stores/WritableStores.svelte";
	import ReadableStores from "./Stores/Readable stores/ReadableStores.svelte";
	import CustomStores from "./Stores/Custom stores/CustomStores.svelte";
  import TweenedProgressBar from "./Motion/TweenedProgressBar.svelte";
  let name = 'world';
</script>


<div class="w-[100%] mb-[40%] p-10">
  <div class="container mx-auto">
    <h1 class="text-yellow-500 font-bold">Introduction</h1>
    <div class="ml-[10%]">
      <h1>Hello {name}!</h1>
      <NestedComponents/>
    </div>
    
    <h1 class="text-yellow-500 font-bold">Reactivity</h1>
    <div class="ml-[10%]">
      <ReactiveAssignment/>
      <ReactiveDeclarations/>
      <ReactiveStatements/>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold">Props</h1>
      <div class="ml-[10%]">
          <DeclaringProps/>
          <SpreadingProps/>
      </div>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold">Logic</h1>
      <div class="ml-[10%]">
          <IfBlock/>
          <ElseBlock/>
          <EachBlock/>
          <KeyedEachBlocks/>
          <AwaitBlock/> <!-- CORS ERROR 🔴🔴🔴-->           

      </div>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold">Events</h1>
      <div class="ml-[10%]">
          <DomEvents/> <!-- <InlineHandlers/> -->
           <EventModifiers/>
          <!--<ComponentEvents/>
          <EventForwarding/>
          <DomEventForwarding/> -->
      </div>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold">Bindings</h1>
      <div class="ml-[10%]">
          <TextInputs/>
          <NumericInputs/>
          <CheckBoxInputs/>
          <GroupInputs/>
          <TextAreaInputs/>
          <FileInputs/>
          <SelectBindings/>
          <SelectMultiple/>
          <EachBlockBindings/>
      </div>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold">LifeCycle</h1>
      <div class="ml-[10%]">
          <OnMount/>

           <OnDestroy/>
          <BeforeUpdateandafterUpdate/>
          <Tick/>
          
      </div>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold">Stores</h1>
      <div class="ml-[10%]">
          <WritableStores/>
          <ReadableStores/>
          
          <CustomStores/>
      </div>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold">Motion</h1>
      <div class="ml-[10%]">
        <TweenedProgressBar/>
      </div>
    </div>
    
  </div>
  
</div>
<!--
 <div>
  <h1 class="text-yellow-500 font-bold"></h1>
  <div class="ml-[20%]">
      
  </div>
</div>
 -->

