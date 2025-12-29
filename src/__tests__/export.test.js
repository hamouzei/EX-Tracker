import { exportToCSV, exportToJSON, exportToCSVAndDownload, exportToJSONAndDownload } from '../utils/export';

// Mock the downloadFile function to test the export functions
jest.mock('../utils/downloadFile', () => ({
  downloadFile: jest.fn(),
}));

// Import the mocked function
const { downloadFile } = require('../utils/export');

describe('Export Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('exportToCSV', () => {
    it('should convert transactions to CSV format', () => {
      const transactions = [
        { id: '1', type: 'income', amount: 100, description: 'Salary', date: '2023-01-01', category: 'Salary' },
        { id: '2', type: 'expense', amount: 50, description: 'Groceries', date: '2023-01-02', category: 'Food' },
      ];

      const csv = exportToCSV(transactions);
      const expected = `"ID","Type","Amount","Description","Date","Category"\n"1","income","100","Salary","2023-01-01","Salary"\n"2","expense","50","Groceries","2023-01-02","Food"`;

      expect(csv).toBe(expected);
    });

    it('should handle empty transactions array', () => {
      const csv = exportToCSV([]);
      expect(csv).toBe('');
    });

    it('should handle transactions with missing fields', () => {
      const transactions = [
        { id: '1', type: 'income', amount: 100, description: 'Salary', date: '2023-01-01' },
      ];

      const csv = exportToCSV(transactions);
      const expected = `"ID","Type","Amount","Description","Date","Category"\n"1","income","100","Salary","2023-01-01",""`; // Empty category

      expect(csv).toBe(expected);
    });
  });

  describe('exportToJSON', () => {
    it('should convert transactions to JSON format', () => {
      const transactions = [
        { id: '1', type: 'income', amount: 100, description: 'Salary', date: '2023-01-01', category: 'Salary' },
        { id: '2', type: 'expense', amount: 50, description: 'Groceries', date: '2023-01-02', category: 'Food' },
      ];

      const json = exportToJSON(transactions);
      const expected = JSON.stringify(transactions, null, 2);

      expect(json).toBe(expected);
    });

    it('should handle empty transactions array', () => {
      const json = exportToJSON([]);
      expect(json).toBe('[]');
    });
  });

  describe('exportToCSVAndDownload', () => {
    it('should create and download CSV file', () => {
      const transactions = [
        { id: '1', type: 'income', amount: 100, description: 'Salary', date: '2023-01-01', category: 'Salary' },
      ];

      exportToCSVAndDownload(transactions, 'test-transactions');

      expect(downloadFile).toHaveBeenCalledWith(
        expect.any(String), // CSV content
        'test-transactions.csv',
        'text/csv'
      );
    });

    it('should use default filename if not provided', () => {
      const transactions = [
        { id: '1', type: 'income', amount: 100, description: 'Salary', date: '2023-01-01', category: 'Salary' },
      ];

      exportToCSVAndDownload(transactions);

      expect(downloadFile).toHaveBeenCalledWith(
        expect.any(String), // CSV content
        'transactions.csv',
        'text/csv'
      );
    });

    it('should not download if no transactions', () => {
      exportToCSVAndDownload([]);

      expect(downloadFile).not.toHaveBeenCalled();
    });
  });

  describe('exportToJSONAndDownload', () => {
    it('should create and download JSON file', () => {
      const transactions = [
        { id: '1', type: 'income', amount: 100, description: 'Salary', date: '2023-01-01', category: 'Salary' },
      ];

      exportToJSONAndDownload(transactions, 'test-transactions');

      expect(downloadFile).toHaveBeenCalledWith(
        expect.any(String), // JSON content
        'test-transactions.json',
        'application/json'
      );
    });

    it('should use default filename if not provided', () => {
      const transactions = [
        { id: '1', type: 'income', amount: 100, description: 'Salary', date: '2023-01-01', category: 'Salary' },
      ];

      exportToJSONAndDownload(transactions);

      expect(downloadFile).toHaveBeenCalledWith(
        expect.any(String), // JSON content
        'transactions.json',
        'application/json'
      );
    });

    it('should not download if no transactions', () => {
      exportToJSONAndDownload([]);

      expect(downloadFile).not.toHaveBeenCalled();
    });
  });
});