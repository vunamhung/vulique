<template>
    <div class="main-content flex-grow-1">
        <div class="header">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-end">
                        <div class="col">
                            <h6 class="header-pretitle">Overview</h6>
                            <h1 class="header-title mb-0">Dashboard</h1>
                        </div>
                        <div class="col-auto">
                            <b-button variant="primary"> <feather size="13" type="target"></feather> Create report</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-6 col-xl">
                    <b-card class="shadow" border-variant="gray-200" header-bg-variant="white" header-border-variant="gray-200">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted mb-2">Value</h6>
                                <span class="h2 mb-0">$24,500</span>
                                <span class="badge badge-soft-success mt-n1">+3.5%</span>
                            </div>
                            <div class="col-auto">
                                <feather class="text-muted" size="20" type="dollar-sign"></feather>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-12 col-lg-6 col-xl">
                    <b-card class="shadow" border-variant="gray-200" header-bg-variant="white" header-border-variant="gray-200">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted mb-2">Total hours</h6>
                                <span class="h2 mb-0">763.5</span>
                            </div>
                            <div class="col-auto">
                                <feather class="text-muted" size="20" type="briefcase"></feather>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-12 col-lg-6 col-xl">
                    <b-card class="shadow" border-variant="gray-200" header-bg-variant="white" header-border-variant="gray-200">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted mb-2">Exit %</h6>
                                <span class="h2 mb-0">35.5%</span>
                            </div>
                            <div class="col-auto">
                                <div class="chart chart-sparkline">
                                    <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand">
                                            <div class=""></div>
                                        </div>
                                        <div class="chartjs-size-monitor-shrink">
                                            <div class=""></div>
                                        </div>
                                    </div>
                                    <canvas
                                        class="chart-canvas chartjs-render-monitor"
                                        id="sparklineChart"
                                        width="150"
                                        height="70"
                                        style="display: block; height: 35px; width: 75px;"
                                    ></canvas>
                                </div>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-12 col-lg-6 col-xl">
                    <b-card class="shadow" border-variant="gray-200" header-bg-variant="white" header-border-variant="gray-200">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted mb-2">Avg. Time</h6>
                                <span class="h2 mb-0">2:37</span>
                            </div>
                            <div class="col-auto">
                                <feather class="text-muted" size="20" type="clock"></feather>
                            </div>
                        </div>
                    </b-card>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <b-card class="shadow" border-variant="gray-200" header-bg-variant="white" header-border-variant="gray-200">
                        <line-chart />
                    </b-card>
                </div>
                <div class="col-12 col-xl-8">
                    <b-card class="shadow" no-body border-variant="gray-200" header-bg-variant="white" header-border-variant="gray-200">
                        <template v-slot:header>
                            <h4 class="card-header-title">Conversions</h4>
                            <flat-pickr v-model="date" :config="config"></flat-pickr>
                        </template>
                        <table class="table table-sm table-nowrap card-table">
                            <thead>
                                <tr>
                                    <th>Goal</th>
                                    <th>Status</th>
                                    <th>Progress</th>
                                    <th>Due date</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr>
                                    <td class="goal-project">
                                        Update the API
                                    </td>
                                    <td class="goal-status"><span class="text-warning">●</span> In progress</td>
                                    <td class="goal-progress">
                                        55%
                                    </td>
                                    <td class="goal-date">
                                        <time datetime="2018-10-24">07/24/18</time>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="goal-project">
                                        Release v1.2-Beta
                                    </td>
                                    <td class="goal-status"><span class="text-warning">●</span> In progress</td>
                                    <td class="goal-progress">
                                        25%
                                    </td>
                                    <td class="goal-date">
                                        <time datetime="2018-10-24">08/26/18</time>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="goal-project">
                                        GDPR Compliance
                                    </td>
                                    <td class="goal-status"><span class="text-success">●</span> Completed</td>
                                    <td class="goal-progress">
                                        100%
                                    </td>
                                    <td class="goal-date">
                                        <time datetime="2018-10-24">06/19/18</time>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="goal-project">
                                        v1.2 Documentation
                                    </td>
                                    <td class="goal-status"><span class="text-danger">●</span> Cancelled</td>
                                    <td class="goal-progress">
                                        0%
                                    </td>
                                    <td class="goal-date">
                                        <time datetime="2018-10-24">06/25/18</time>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="goal-project">
                                        Plan design offsite
                                    </td>
                                    <td class="goal-status"><span class="text-success">●</span> Completed</td>
                                    <td class="goal-progress">
                                        100%
                                    </td>
                                    <td class="goal-date">
                                        <time datetime="2018-10-24">06/30/18</time>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-card>
                </div>
                <div class="col-12 col-xl-4">
                    <b-card class="shadow" no-body border-variant="gray-200" header-bg-variant="white" header-border-variant="gray-200">
                        <template v-slot:header>
                            <h4 class="card-header-title">Traffic Channels</h4>
                            <ul class="nav nav-tabs nav-tabs-sm card-header-tabs">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active" data-toggle="tab">All</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link" data-toggle="tab">Direct</a>
                                </li>
                            </ul>
                        </template>
                        <b-list-group class="list-group-activity" flush>
                            <b-list-group-item>
                                <b-media no-body>
                                    <b-media-aside class="mr-2">
                                        <div class="avatar avatar-sm avatar-online">
                                            <img class="avatar-img rounded-circle" src="@/assets/img/avatars/profiles/avatar-1.jpg" alt="..." />
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
                                            <img class="avatar-img rounded-circle" src="@/assets/img/avatars/profiles/avatar-2.jpg" alt="..." />
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
                                            <img class="avatar-img rounded-circle" src="@/assets/img/avatars/profiles/avatar-3.jpg" alt="..." />
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
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from "@/components/LineChart";
    export default {
        name: "MainContent",
        components: { LineChart },
        data() {
            return {
                // Initial value
                date: new Date(),
                // Get more form https://chmln.github.io/flatpickr/options/
                config: {
                    mode: "range",
                },
            };
        },
    };
</script>
