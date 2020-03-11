<script>
    import { Line } from "vue-chartjs";

    export default {
        extends: Line,
        mounted() {
            const chartData = {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                datasets: [
                    {
                        label: "GitHub Commits",
                        fill: false,
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
                    },
                ],
            };
            const options = {
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
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                },
            };
            this.renderChart(chartData, options);
        },
    };
</script>
