<template>
<div class="example">
  <apexchart width="800" height="300" type="heatmap" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>
export default {
  name: 'HeatmapExample',
  props: [
    'userId'
  ],

  data: function() {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        xaxis: {
          type: 'category',
        },
        title: {
          // text: 'HeatMap Chart (Single color)'
          text: this.userId
        },
      },
      series: [{
          name: 'Sunday',
          data: this.generateData(24, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Saturday',
          data: this.generateData(24, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Friday',
          data: this.generateData(24, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Thursday',
          data: this.generateData(24, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Wednesday',
          data: this.generateData(24, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Tuesday',
          data: this.generateData(24, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Monday',
          data: this.generateData(24, {
            min: 0,
            max: 90
          })
        }
      ],
    }
  },

  methods: {
    generateData(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    },
  }
}
</script>