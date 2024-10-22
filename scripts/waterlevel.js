(function () {
        $('#container').highcharts({
            chart: {
                spacingRight: 5
            },
            title: {
                text: 'Подьем уровня воды в реке Ока'
            },
            xAxis: {
                type: 'datetime',
                title: {
                    text: null
                }
            },
            yAxis: {
                title: {
                    text: 'Уровень'
                },
                labels: {
                    formatter: function() {
                        return this.value / 100 +'м';
                        }
                }
            },
            tooltip: {
				pointFormat: 'Уровень воды <b>{point.y:,.0f} сантиметров</b>',
                shared: true
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    lineWidth: 1,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
    
            series: [{
                type: 'area',
                name: 'Уровень воды',
                pointInterval: 24 * 3600 * 1000,
                pointStart: Date.UTC(2013, 3, 5),
                data: [
                    67, 87, 130, 165, 206, 236, 400, 550, 790, 1000
                ]
            }]
        });
    });
