import React from 'react';
import './ChartSetting.scss';
import Dropdown from './custom-inputs/Dropdown';
import Range from './custom-inputs/Range';

function ChartSetting({setConfigs, configs, showing}) {
    const chartTypes = ['column', 'pie', 'line', 'spline', 'area', 'bar'];

    return (
        <div className={'settings-container' + (showing ? ' open' : '')}>
            <Dropdown label="Chart Type" setValue={setConfigs.setChartType} options={chartTypes}></Dropdown>

            <label className="text-input-label">
                Title:
                <input type="text" value={configs.title} onChange={(e) => setConfigs.setTitle(e.target.value)} />
            </label>

            <label className="text-input-label">
                Subtitle:
                <input type="text" value={configs.subtitle} onChange={(e) => setConfigs.setSubtitle(e.target.value)} />
            </label>

            <label className="text-input-label">
                X Axis Title:
                <input
                    type="text"
                    value={configs.xAxisTitle}
                    onChange={(e) => setConfigs.setXAxisTitle(e.target.value)}
                />
            </label>

            <label className="text-input-label">
                Y Axis Title:
                <input
                    type="text"
                    value={configs.yAxisTitle}
                    onChange={(e) => setConfigs.setYAxisTitle(e.target.value)}
                />
            </label>

            <label className="checkbox-input-label">
                Show Tooltip:
                <input
                    type="checkbox"
                    checked={configs.tooltipShowing}
                    onChange={() => setConfigs.setTooltipShowing(!configs.tooltipShowing)}
                />
            </label>

            <label className="checkbox-input-label">
                Show Label:
                <input
                    type="checkbox"
                    checked={configs.labelShowing}
                    onChange={(e) => setConfigs.setLabelShowing(!configs.labelShowing)}
                />
            </label>

            <label className="text-input-label">
                Word After Label:
                <input
                    type="text"
                    value={configs.wordAfterLabel}
                    onChange={(e) => setConfigs.setWordAfterLabel(e.target.value)}
                />
            </label>

            <Range label="Color:" setValue={setConfigs.setColorHue} value={setConfigs.colorHue}></Range>
        </div>
    );
}

export default ChartSetting;
