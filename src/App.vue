<template>
  <div id="app">
  <div>
    <full-page :options="options">
      <!-- <div class="section">
        <cover />
      </div> -->
      <div class="section">
        <div id="wrapper">
          <graph />
        </div>
      </div>
      <!-- <div class="section" >
        <div id="outer" style="width:1200px;">
          <div id="divl">
            <chart />
          </div>
          <div id="text-wrapper">
            <div id="text">Average Degree: 22.85</div>
            <div id="text">Average Clustering Coefficient: 0.71</div>
            <div id="text">Diameter: 4</div>
          </div>
        </div>
      </div>
      <div class="section" >
        <div id="outer2-wrapper">
          <div id="outer2" style="width:700px;">
            <chartDegreeCentrality />
          </div>
        </div>
      </div>
      <div class="section" >
        <div id="outer2-wrapper">
          <div id="outer2" style="width:700px;">
            <chartClosenessCentrality />
          </div>
        </div>
      </div> -->
      <div class="section">
        <div id="wrapper">
          <heatmap />
          <heatmap />
        </div>
      </div>
    </full-page>
  </div>


  </div>
</template>

<script>
// import cover from "./components/Cover.vue";
import graph from "./components/Graph.vue";
// import chart from "./components/Chart.vue";
// import chartDegreeCentrality from "./components/ChartDegreeCentrality.vue";
// import chartClosenessCentrality from "./components/ChartClosenessCentrality.vue";
import heatmap from "./components/HeatMap.vue"

export default {
  name: 'app',
  components: {
    // cover,
    graph,
    // chart,
    // chartDegreeCentrality,
    // chartClosenessCentrality
    heatmap
  },
}
</script>

<style>
#wrapper {
  margin: auto;
}

#outer {
  /* margin: 0 auto; */
  /* margin-left: auto;
  margin-right: auto; */
  margin: auto;
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
}

#outer2-wrapper {
  /* text-align: center; */
  /* position: absolute; */
  display: flex;
}

#outer2 {
  /* margin-left: auto;
  margin-right: auto; */
  margin: auto;
}

#text-wrapper {
  display: table;
  width: 200px;
  padding-left: 0px;
}

#divl {
  width: 700px;
}

#text {
  width: 500px;
  margin-top: 60px;
  margin-left: 50px;
  text-align: left;
  font-size: 30px;
}


</style>
