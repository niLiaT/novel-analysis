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
          // data: this.generateData(24, {
          //   min: 0,
          //   max: 90
          // })
          data: this.generateData('sun')
        },
        {
          name: 'Saturday',
          // data: this.generateData(24, {
          //   min: 0,
          //   max: 90
          // })
          data: this.generateData('sat')
        },
        {
          name: 'Friday',
          // data: this.generateData(24, {
          //   min: 0,
          //   max: 90
          // })
          data: this.generateData('fri')
        },
        {
          name: 'Thursday',
          // data: this.generateData(24, {
          //   min: 0,
          //   max: 90
          // })
          data: this.generateData('thu')
        },
        {
          name: 'Wednesday',
          // data: this.generateData(24, {
          //   min: 0,
          //   max: 90
          // })
          data: this.generateData('wed')
        },
        {
          name: 'Tuesday',
          // data: this.generateData(24, {
          //   min: 0,
          //   max: 90
          // })
          data: this.generateData('tue')
        },
        {
          name: 'Monday',
          // data: this.generateData(24, {
          //   min: 0,
          //   max: 90
          // })
          data: this.generateData('mon')
        }
      ],
    }
  },

  methods: {
    generateData(day) {
      var i = 0;
      var series = [];
      while (i < 24) {
        var x = (i).toString();
        // var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var y = box[this.userId][day][i]
        series.push({
          x: x,
          y: y
        });
        i++;
      }
      // console.log[box[this.userId]];


      return series;
    },
  }
}
const box = {
  A: {
    mon: [99, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    tue: [1, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    wed: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    thu: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    fri: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    sat: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    sun: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63]
  },
  B: {
    mon: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    tue: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    wed: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    thu: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    fri: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    sat: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63],
    sun: [30, 58, 87, 42, 64, 29, 75, 38, 46, 96, 36, 68, 36, 58, 63, 58, 75, 67, 90, 66, 44, 66, 88, 63]
  }
}
</script>