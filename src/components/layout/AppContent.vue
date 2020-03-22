<template>
    <div class="main-content">
        <v-header title="Dashboard" pre-title="Overview">
            <b-button variant="primary" slot="toolbar"> <feather size="15" type="clock" /> Create report </b-button>
        </v-header>
        <b-container>
            <b-row cols="1" cols-md="2" cols-lg="4">
                <b-col>
                    <v-card class="shadow bg-conner-1">
                        <b-row align-v="center">
                            <b-col>
                                <h6 class="text-uppercase text-muted mb-2">Value</h6>
                                <span class="h2 mb-0">$24,500</span>
                                <span class="badge badge-soft-success mt-n1 ml-1">+3.5%</span>
                            </b-col>
                            <b-col cols="auto">
                                <feather class="text-muted" size="20" type="dollar-sign"></feather>
                            </b-col>
                        </b-row>
                    </v-card>
                </b-col>
                <b-col>
                    <v-card class="shadow bg-conner-2">
                        <b-row align-v="center">
                            <b-col>
                                <h6 class="text-uppercase text-muted mb-2">Total hours</h6>
                                <span class="h2 mb-0">763.5</span>
                            </b-col>
                            <b-col cols="auto">
                                <feather class="text-muted" size="20" type="briefcase"></feather>
                            </b-col>
                        </b-row>
                    </v-card>
                </b-col>
                <b-col>
                    <v-card class="shadow bg-conner-3">
                        <b-row align-v="center">
                            <b-col>
                                <h6 class="text-uppercase text-muted mb-2">Exit %</h6>
                                <span class="h2 mb-0">35.5%</span>
                            </b-col>
                            <b-col>
                                <sparkline-chart width="100" height="50" :chart-data="chartData" />
                            </b-col>
                        </b-row>
                    </v-card>
                </b-col>
                <b-col>
                    <v-card class="shadow bg-conner-4">
                        <b-row align-v="center">
                            <b-col class="col">
                                <h6 class="text-uppercase text-muted mb-2">Avg. Time</h6>
                                <span class="h2 mb-0">2:37</span>
                            </b-col>
                            <b-col cols="auto">
                                <feather class="text-muted" size="20" type="clock"></feather>
                            </b-col>
                        </b-row>
                    </v-card>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <v-card class="shadow">
                        <line-chart :chart-data="chartData" :chart-options="chartOptions" />
                    </v-card>
                </b-col>
            </b-row>
            <b-row>
                <b-col xl="8">
                    <v-card class="shadow" no-body>
                        <template #header>
                            <h4 class="mb-0">Conversions</h4>
                            <flat-pickr v-model="date" :config="config" />
                        </template>
                        <b-table striped hover responsive caption-top small :items="items" class="card-table">
                            <template #table-caption>This is a table caption at the top.</template>
                        </b-table>
                    </v-card>
                </b-col>
                <b-col xl="4">
                    <v-card class="shadow" no-body>
                        <template #header>
                            <h4 class="mb-0">Traffic Channels</h4>
                            <b-nav card-header tabs>
                                <b-nav-item active>Active</b-nav-item>
                                <b-nav-item>Inactive</b-nav-item>
                            </b-nav>
                        </template>
                        <b-list-group class="list-group-activity" flush>
                            <b-list-group-item>
                                <b-media no-body>
                                    <b-media-aside class="mr-2">
                                        <div class="avatar avatar-sm avatar-online">
                                            <b-img
                                                rounded="circle"
                                                class="avatar-img"
                                                src="../../assets/img/avatars/profiles/avatar-1.jpg"
                                                alt="..."
                                            />
                                        </div>
                                    </b-media-aside>
                                    <b-media-body>
                                        <h5 class="mb-1">Dianna Smiley</h5>
                                        <p class="small text-gray-700 mb-0">Uploaded the files "Launchday Logo" and "New Design".</p>
                                        <small class="text-muted">2m ago</small>
                                    </b-media-body>
                                </b-media>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b-media no-body>
                                    <b-media-aside class="mr-2">
                                        <div class="avatar avatar-sm avatar-online">
                                            <b-img
                                                rounded="circle"
                                                class="avatar-img"
                                                src="../../assets/img/avatars/profiles/avatar-2.jpg"
                                                alt="..."
                                            />
                                        </div>
                                    </b-media-aside>
                                    <b-media-body>
                                        <h5 class="mb-1">Ab Hadley</h5>
                                        <p class="small text-gray-700 mb-0">Shared the "Why Dashkit?" post with 124 subscribers.</p>
                                        <small class="text-muted">1h ago</small>
                                    </b-media-body>
                                </b-media>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b-media no-body>
                                    <b-media-aside class="mr-2">
                                        <div class="avatar avatar-sm avatar-online">
                                            <b-img
                                                rounded="circle"
                                                class="avatar-img"
                                                src="../../assets/img/avatars/profiles/avatar-3.jpg"
                                                alt="..."
                                            />
                                        </div>
                                    </b-media-aside>
                                    <b-media-body>
                                        <h5 class="mb-1">Adolfo Hess</h5>
                                        <p class="small text-gray-700 mb-0">Exported sales data from Launchday's subscriber data.</p>
                                        <small class="text-muted">3h ago</small>
                                    </b-media-body>
                                </b-media>
                            </b-list-group-item>
                        </b-list-group>
                    </v-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import LineChart from "@/components/chart/LineChart";
    import SparklineChart from "@/components/chart/SparklineChart";

    export default {
        name: "AppContent",
        components: { SparklineChart, LineChart },
        data() {
            return {
                items: [
                    { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
                    { age: 21, first_name: "Larsen", last_name: "Shaw" },
                    { age: 89, first_name: "Geneva", last_name: "Wilson" },
                    { age: 38, first_name: "Jami", last_name: "Carney" },
                ],
                // Initial value
                date: new Date(),
                // Get more form https://chmln.github.io/flatpickr/options/
                config: {
                    mode: "range",
                },
                chartData: {
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
                },
                chartOptions: {
                    maintainAspectRatio: false,
                    elements: {
                        line: {
                            borderColor: "#2c7be5",
                            borderWidth: 2,
                        },
                    },
                    scales: {
                        x: {
                            gridLines: {
                                display: false,
                            },
                        },
                        y: {
                            gridLines: {
                                borderDash: [5, 5],
                            },
                            ticks: {
                                callback(value) {
                                    return `$${value}k`;
                                },
                            },
                        },
                    },
                },
            };
        },
    };
</script>
