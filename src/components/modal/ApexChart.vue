<template lang="">
    <div>
        <div id="chart" class="h-full">
          <ApexChart
            type="area"
            :height="height"
            :options="chartOptions"
            :series="series"
          ></ApexChart>
        </div>
    </div>
</template>


<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    ApexChart: VueApexCharts,
  },
  props: ["height", "series"],
  data() {
    return {
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "area",
          height: "100%",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: ["#FFD489"],
          width: 2,
          dashArray: 0,
        },
        grid: {
          show: false,
        },

        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          style: "hollow",
        },
        xaxis: {
          type: "datetime",
          min: new Date("01 Mar 2012").getTime(),
          // max: new Date().getTime(),
          tickAmount: 0,
          labels: {
            show: false,
          },
        },

        tooltip: {
          enabled: true,
          fillSeriesColor: false,
          // theme: "dark",
          style: {
            fontSize: "16px",
            fontFamily: undefined,
            background: "#000000",
          },
          x: {
            format: "dd MMM yyyy",
          },
        },
        fill: {
          type: "gradient",
          colors: ["#FFD489"],
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 100],
          },
        },
      },
      selection: "one_year",
    };
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  padding-bottom: 5px;
}
.last-child div:last-child {
  border-bottom: 0;
}
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 260px;
  background-color: #313945;
  color: #fff;
  text-align: justify;
  border-radius: 6px;
  padding: 24px;
  font-size: 0.75rem;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 16px;
  border: 2px solid hsla(0, 0%, 100%, 0.1);

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px;

  opacity: 0;
  transition: opacity 1s;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
