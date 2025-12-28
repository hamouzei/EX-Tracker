/**
 * Date utility functions for the Expense Tracker application
 */

/**
 * Parse a date string and return a Date object
 * @param {string} dateString - Date string in various formats
 * @returns {Date|null} - Date object or null if invalid
 */
export const parseDate = (dateString) => {
  if (!dateString) return null;
  
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
};

/**
 * Format a date to YYYY-MM-DD string (ISO format)
 * @param {Date} date - Date object to format
 * @returns {string} - Formatted date string
 */
export const formatDateToISO = (date) => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return '';
  }
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

/**
 * Format a date to locale string
 * @param {Date} date - Date object to format
 * @param {object} options - Formatting options
 * @returns {string} - Formatted date string
 */
export const formatDateToLocale = (date, options = { year: 'numeric', month: 'short', day: 'numeric' }) => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return '';
  }
  
  return date.toLocaleDateString(undefined, options);
};

/**
 * Check if a date is in the future
 * @param {Date} date - Date to check
 * @returns {boolean} - True if date is in the future
 */
export const isFutureDate = (date) => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return false;
  }
  
  const today = new Date();
  today.setHours(23, 59, 59, 999); // End of today
  
  return date > today;
};

/**
 * Validate a date string
 * @param {string} dateString - Date string to validate
 * @returns {boolean} - True if date is valid
 */
export const isValidDate = (dateString) => {
  const date = parseDate(dateString);
  return date !== null && !isNaN(date.getTime());
};