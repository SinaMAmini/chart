import React from 'react';

import './ChartSetting.scss';

function ChartSetting({setConfigs, configs}) {
    return (
        <div className="settings-container">
            <label>
                x Axis Title:{' '}
                <input
                    type="text"
                    value={configs.xAxisTitle}
                    onChange={(e) => setConfigs.setXAxisTitle(e.target.value)}
                />
            </label>
            <label>chart type:</label>
        </div>
    );
}

export default ChartSetting;
