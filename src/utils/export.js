/**
 * Export utility functions for the Expense Tracker application
 */

/**
 * Export transactions to CSV format
 * @param {Array} transactions - Array of transaction objects
 * @returns {string} - CSV formatted string
 */
export const exportToCSV = (transactions) => {
  if (!transactions || transactions.length === 0) {
    return '';
  }

  // Define CSV headers
  const headers = ['ID', 'Type', 'Amount', 'Description', 'Date', 'Category'];
  
  // Convert transactions to CSV rows
  const rows = transactions.map(transaction => [
    transaction.id,
    transaction.type,
    transaction.amount,
    transaction.description,
    transaction.date,
    transaction.category
  ]);

  // Combine headers and rows
  const csvContent = [headers, ...rows]
    .map(row => row.map(field => `"${field || ''}"`).join(','))
    .join('\n');

  return csvContent;
};

/**
 * Export transactions to JSON format
 * @param {Array} transactions - Array of transaction objects
 * @returns {string} - JSON formatted string
 */
export const exportToJSON = (transactions) => {
  return JSON.stringify(transactions, null, 2);
};

/**
 * Download content as a file
 * @param {string} content - Content to download
 * @param {string} filename - Name of the file to download
 * @param {string} mimeType - MIME type of the file
 */
export const downloadFile = (content, filename, mimeType) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Export transactions to CSV and download
 * @param {Array} transactions - Array of transaction objects
 * @param {string} filename - Name of the file to download (without extension)
 */
export const exportToCSVAndDownload = (transactions, filename = 'transactions') => {
  const csvContent = exportToCSV(transactions);
  if (csvContent) {
    downloadFile(csvContent, `${filename}.csv`, 'text/csv');
  }
};

/**
 * Export transactions to JSON and download
 * @param {Array} transactions - Array of transaction objects
 * @param {string} filename - Name of the file to download (without extension)
 */
export const exportToJSONAndDownload = (transactions, filename = 'transactions') => {
  const jsonContent = exportToJSON(transactions);
  if (jsonContent) {
    downloadFile(jsonContent, `${filename}.json`, 'application/json');
  }
};