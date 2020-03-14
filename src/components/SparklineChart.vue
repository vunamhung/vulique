<script>
    import { Line } from "vue-chartjs";

    export default {
        extends: Line,
        props: {
            chartData: {
                type: Object,
            },
        },
        mounted() {
            this.renderChart(this.chartData, {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                elements: {
                    line: {
                        borderColor: "#2c7be5",
                        borderWidth: 2,
                    },
                    point: {
                        radius: 0,
                    },
                },
                tooltips: {
                    enabled: false,
                },
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                },
            });
        },
    };
</script>

<style scoped>
    canvas {
        max-width: 100%;
        max-height: 50px;
    }
</style>
