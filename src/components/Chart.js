import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './Chart.scss';

function Chart({options}) {
    return (
        <div className="chart">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

export default Chart;
