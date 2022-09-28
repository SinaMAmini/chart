import React, {useState, useEffect} from 'react';
import Chart from '../components/Chart';
import ChartSetting from '../components/ChartSetting';
import './Home.scss';
import data from'../data.json'  ;

function Home() {
    const [xAxisTitle, setXAxisTitle] = useState('Browser');
    const [yAxisTitle, setYAxisTitle] = useState('Total percent market share');
    const [title, setTitle] = useState('Browser market share');
    const [subtitle, setSubtitle] = useState('Source: https://statcounter.com');
    const [colorHue, setColorHue] = useState(210);
    const [tooltipShowing, setTooltipShowing] = useState(false);
    const [labelShowing, setLabelShowing] = useState(true);
    const [wordAfterLabel, setWordAfterLabel] = useState('%');
    const [chartType, setChartType] = useState('column');

    const [options, setOptions] = useState({});

    const [optionShowing, setOptionShowing] = useState(false);

    useEffect(
        () =>
            setOptions({
                chart: {
                    type: chartType,
                    height: 100 + '%',
                    width: document.body.clientWidth < 703 ? document.body.clientWidth : 100 + '%',
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
                            format: '{point.y:.1f}' + wordAfterLabel,
                        },
                    },
                },

                colors: [
                    `hsl(${colorHue},90%,70%)`,
                    `hsl(${colorHue},40%,50%)`,
                    `hsl(${colorHue},80%,80%)`,
                    `hsl(${colorHue},30%,40%)`,
                    `hsl(${colorHue},70%,60%)`,
                    `hsl(${colorHue},20%,40%)`,
                    `hsl(${colorHue},90%,80%)`,
                    `hsl(${colorHue},100%,20%)`,
                    `hsl(${colorHue},100%,70%)`,
                    `hsl(${colorHue},80%,40%)`,
                ],

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
        [xAxisTitle, yAxisTitle, title, subtitle, colorHue, tooltipShowing, labelShowing, chartType, wordAfterLabel]
    );

    const handle = () => {
        console.log(data);
    }

    return (
        <div className="home">
            <i className="fa-solid bar" onClick={() => setOptionShowing(!optionShowing)}></i>
            <Chart options={options}></Chart>
            <ChartSetting
                showing={optionShowing}
                setConfigs={{
                    setChartType,
                    setColorHue,
                    setTitle,
                    setSubtitle,
                    setXAxisTitle,
                    setYAxisTitle,
                    setTooltipShowing,
                    setLabelShowing,
                    setWordAfterLabel,
                }}
                configs={{
                    chartType,
                    colorHue,
                    title,
                    subtitle,
                    xAxisTitle,
                    yAxisTitle,
                    tooltipShowing,
                    labelShowing,
                    wordAfterLabel,
                }}
            ></ChartSetting>
            <button onClick={() => handle()}>click me</button>
        </div>
    );
}

export default Home;
