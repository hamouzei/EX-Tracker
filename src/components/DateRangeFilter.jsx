import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './DateRangeFilter.module.css';

const DateRangeFilter = ({ onDateRangeChange }) => {
  const [dateRange, setDateRange] = useState('all'); // 'all', 'today', 'week', 'month', 'year', 'custom'
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  const handlePresetChange = (range) => {
    setDateRange(range);
    if (range !== 'custom') {
      setCustomStartDate('');
      setCustomEndDate('');
      onDateRangeChange(range, null, null);
    }
  };

  const handleCustomChange = () => {
    if (customStartDate && customEndDate) {
      setDateRange('custom');
      onDateRangeChange('custom', customStartDate, customEndDate);
    }
  };

  return (
    <div className={style.dateRangeFilter}>
      <div className={style.presetButtons}>
        <button 
          className={dateRange === 'all' ? style.active : ''}
          onClick={() => handlePresetChange('all')}
        >
          All
        </button>
        <button 
          className={dateRange === 'today' ? style.active : ''}
          onClick={() => handlePresetChange('today')}
        >
          Today
        </button>
        <button 
          className={dateRange === 'week' ? style.active : ''}
          onClick={() => handlePresetChange('week')}
        >
          This Week
        </button>
        <button 
          className={dateRange === 'month' ? style.active : ''}
          onClick={() => handlePresetChange('month')}
        >
          This Month
        </button>
        <button 
          className={dateRange === 'year' ? style.active : ''}
          onClick={() => handlePresetChange('year')}
        >
          This Year
        </button>
        <button 
          className={dateRange === 'custom' ? style.active : ''}
          onClick={() => handlePresetChange('custom')}
        >
          Custom
        </button>
      </div>

      {dateRange === 'custom' && (
        <div className={style.customRange}>
          <input
            type="date"
            value={customStartDate}
            onChange={(e) => setCustomStartDate(e.target.value)}
            placeholder="Start date"
          />
          <span>to</span>
          <input
            type="date"
            value={customEndDate}
            onChange={(e) => setCustomEndDate(e.target.value)}
            placeholder="End date"
          />
          <button onClick={handleCustomChange}>Apply</button>
        </div>
      )}
    </div>
  );
};

DateRangeFilter.propTypes = {
  onDateRangeChange: PropTypes.func.isRequired
};

export default DateRangeFilter;