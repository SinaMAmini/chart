import React, {useState} from 'react';
import {useEffect} from 'react';
import Chart from '../components/Chart';
import ChartSetting from '../components/ChartSetting';
import './Home.scss';

function Home() {
    const [xAxisTitle, setXAxisTitle] = useState('Browser');
    const [yAxisTitle, setYAxisTitle] = useState('Total percent market share');
    const [title, setTitle] = useState('Browser market share');
    const [subtitle, setSubtitle] = useState('Source: https://statcounter.com');
    const [color, setColor] = useState('Blue');
    const [tooltipShowing, setTooltipShowing] = useState(false);
    const [labelShowing, setLabelShowing] = useState(true);
    const [chartType, setChartType] = useState('pie');

    const [options, setOptions] = useState({});

    useEffect(
        () =>
            setOptions({
                chart: {
                    type: chartType,
                },
                title: {
                    text: title,
                },
                subtitle: {
                    text: subtitle,
                },
                xAxis: {
                    title: {
                        text: xAxisTitle,
                    },
                },
                yAxis: {
                    title: {
                        text: yAxisTitle,
                    },
                },
                legend: {
                    enabled: false,
                },
                plotOptions: {
                    series: {
                        pointPadding: 0.4,
                        borderWidth: 0,
                        dataLabels: {
                            enabled: labelShowing,
                            format: '{point.y:.1f}%',
                        },
                    },
                },

                tooltip: {
                    enabled: tooltipShowing,
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat:
                        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
                },

                series: [
                    {
                        name: 'Browsers',
                        colorByPoint: true,
                        data: [
                            {
                                name: 'Chrome',
                                y: 63.1,
                            },
                            {
                                name: 'Firefox',
                                y: 4.2,
                            },
                            {
                                name: 'Safari',
                                y: 19.8,
                            },
                        ],
                    },
                ],
            }),
        [xAxisTitle, yAxisTitle, title, subtitle, color, tooltipShowing, labelShowing, chartType]
    );

    const clickHandler = () => {
        console.log(options);
    };

    return (
        <div className="home">
            <Chart options={options}></Chart>
            <ChartSetting
                setConfigs={{
                    setChartType,
                    setColor,
                    setTitle,
                    setSubtitle,
                    setXAxisTitle,
                    setYAxisTitle,
                    setTooltipShowing,
                    setLabelShowing,
                }}
                configs={{
                    chartType,
                    color,
                    title,
                    subtitle,
                    xAxisTitle,
                    yAxisTitle,
                    tooltipShowing,
                    labelShowing,
                }}
            ></ChartSetting>
            <button onClick={() => clickHandler()}>click me</button>
        </div>
    );
}

export default Home;
