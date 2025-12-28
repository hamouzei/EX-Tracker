import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { exportToCSVAndDownload, exportToJSONAndDownload } from '../utils/export';
import style from './ExportButton.module.css';

const ExportButton = ({ transactions, title = "Export Transactions" }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleExport = (format) => {
    if (!transactions || transactions.length === 0) {
      alert('No transactions to export');
      return;
    }

    const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
    const filename = `transactions_${date}`;

    if (format === 'csv') {
      exportToCSVAndDownload(transactions, filename);
    } else if (format === 'json') {
      exportToJSONAndDownload(transactions, filename);
    }

    setShowMenu(false);
  };

  return (
    <div className={style.exportButtonContainer}>
      <button 
        className={style.exportButton}
        onClick={() => setShowMenu(!showMenu)}
      >
        {title}
      </button>
      
      {showMenu && (
        <div className={style.exportMenu}>
          <button 
            className={style.exportMenuItem}
            onClick={() => handleExport('csv')}
          >
            Export as CSV
          </button>
          <button 
            className={style.exportMenuItem}
            onClick={() => handleExport('json')}
          >
            Export as JSON
          </button>
        </div>
      )}
    </div>
  );
};

ExportButton.propTypes = {
  transactions: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default ExportButton;