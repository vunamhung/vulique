<script>
    import { Line } from "vue-chartjs";

    export default {
        extends: Line,
        props: {
            chartData: {
                type: Object,
            },
            chartOptions: {
                type: Object,
            },
        },
        mounted() {
            this.renderChart(this.chartData, this.chartOptions);
        },
    };
</script>
