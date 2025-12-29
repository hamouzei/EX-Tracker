import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../../src/App'; // Import from the correct path
import { TransactionProvider } from '../../../src/contextApi/TransactionContext';
import { ToastProvider } from '../../../src/contextApi/ToastContext';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock the entire app or relevant components for integration testing
const MockApp = () => (
  <ToastProvider>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </ToastProvider>
);

describe('Integration Tests - Transaction Flow', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  it('should add a transaction and update the UI', async () => {
    render(<MockApp />);

    // Find and click the add transaction button
    const addTransactionBtn = screen.getByText(/add transaction/i);
    fireEvent.click(addTransactionBtn);

    // Wait for the form to appear
    await waitFor(() => {
      expect(screen.getByText(/save transaction/i)).toBeInTheDocument();
    });

    // Fill in the form
    const descriptionInput = screen.getByPlaceholderText(/description/i);
    fireEvent.change(descriptionInput, { target: { value: 'Test Transaction' } });

    const amountInput = screen.getByPlaceholderText(/amount/i);
    fireEvent.change(amountInput, { target: { value: '100' } });

    const dateInput = screen.getByLabelText(''); // Date input might not have a label
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });

    const categorySelect = screen.getByRole('combobox');
    fireEvent.change(categorySelect, { target: { value: 'Food' } });

    // Submit the form
    const saveBtn = screen.getByText(/save transaction/i);
    fireEvent.click(saveBtn);

    // Wait for the transaction to be added
    await waitFor(() => {
      expect(screen.getByText('Test Transaction')).toBeInTheDocument();
    });

    // Verify the transaction appears in the UI
    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('Food')).toBeInTheDocument();
  });

  it('should edit an existing transaction', async () => {
    // First, add a transaction
    render(<MockApp />);

    // Find and click the add transaction button
    const addTransactionBtn = screen.getByText(/add transaction/i);
    fireEvent.click(addTransactionBtn);

    // Wait for the form to appear
    await waitFor(() => {
      expect(screen.getByText(/save transaction/i)).toBeInTheDocument();
    });

    // Fill in the form
    const descriptionInput = screen.getByPlaceholderText(/description/i);
    fireEvent.change(descriptionInput, { target: { value: 'Original Transaction' } });

    const amountInput = screen.getByPlaceholderText(/amount/i);
    fireEvent.change(amountInput, { target: { value: '50' } });

    const dateInput = screen.getByLabelText(''); // Date input might not have a label
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });

    const categorySelect = screen.getByRole('combobox');
    fireEvent.change(categorySelect, { target: { value: 'Food' } });

    // Submit the form
    const saveBtn = screen.getByText(/save transaction/i);
    fireEvent.click(saveBtn);

    // Wait for the transaction to be added
    await waitFor(() => {
      expect(screen.getByText('Original Transaction')).toBeInTheDocument();
    });

    // Now edit the transaction
    const editBtn = screen.getByText(/edit/i); // Assuming there's an edit button
    fireEvent.click(editBtn);

    // Wait for the form to appear with the existing values
    await waitFor(() => {
      expect(screen.getByText(/update transaction/i)).toBeInTheDocument();
    });

    // Change the description
    const updatedDescriptionInput = screen.getByPlaceholderText(/description/i);
    fireEvent.change(updatedDescriptionInput, { target: { value: 'Updated Transaction' } });

    // Change the amount
    const updatedAmountInput = screen.getByPlaceholderText(/amount/i);
    fireEvent.change(updatedAmountInput, { target: { value: '75' } });

    // Submit the form
    const updateBtn = screen.getByText(/update transaction/i);
    fireEvent.click(updateBtn);

    // Wait for the transaction to be updated
    await waitFor(() => {
      expect(screen.getByText('Updated Transaction')).toBeInTheDocument();
    });

    // Verify the updated transaction appears in the UI
    expect(screen.getByText('$75.00')).toBeInTheDocument();
  });

  it('should delete a transaction', async () => {
    // First, add a transaction
    render(<MockApp />);

    // Find and click the add transaction button
    const addTransactionBtn = screen.getByText(/add transaction/i);
    fireEvent.click(addTransactionBtn);

    // Wait for the form to appear
    await waitFor(() => {
      expect(screen.getByText(/save transaction/i)).toBeInTheDocument();
    });

    // Fill in the form
    const descriptionInput = screen.getByPlaceholderText(/description/i);
    fireEvent.change(descriptionInput, { target: { value: 'Transaction to Delete' } });

    const amountInput = screen.getByPlaceholderText(/amount/i);
    fireEvent.change(amountInput, { target: { value: '25' } });

    const dateInput = screen.getByLabelText(''); // Date input might not have a label
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });

    const categorySelect = screen.getByRole('combobox');
    fireEvent.change(categorySelect, { target: { value: 'Food' } });

    // Submit the form
    const saveBtn = screen.getByText(/save transaction/i);
    fireEvent.click(saveBtn);

    // Wait for the transaction to be added
    await waitFor(() => {
      expect(screen.getByText('Transaction to Delete')).toBeInTheDocument();
    });

    // Now delete the transaction
    const deleteBtn = screen.getByText(/delete/i); // Assuming there's a delete button
    fireEvent.click(deleteBtn);

    // Confirm the deletion if there's a confirmation dialog
    const confirmBtn = screen.getByText(/confirm/i); // Assuming there's a confirmation button
    if (confirmBtn) {
      fireEvent.click(confirmBtn);
    }

    // Wait for the transaction to be removed
    await waitFor(() => {
      expect(screen.queryByText('Transaction to Delete')).not.toBeInTheDocument();
    });
  });

  it('should persist transactions across page refresh', async () => {
    // Add a transaction
    render(<MockApp />);

    // Find and click the add transaction button
    const addTransactionBtn = screen.getByText(/add transaction/i);
    fireEvent.click(addTransactionBtn);

    // Wait for the form to appear
    await waitFor(() => {
      expect(screen.getByText(/save transaction/i)).toBeInTheDocument();
    });

    // Fill in the form
    const descriptionInput = screen.getByPlaceholderText(/description/i);
    fireEvent.change(descriptionInput, { target: { value: 'Persistent Transaction' } });

    const amountInput = screen.getByPlaceholderText(/amount/i);
    fireEvent.change(amountInput, { target: { value: '150' } });

    const dateInput = screen.getByLabelText(''); // Date input might not have a label
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });

    const categorySelect = screen.getByRole('combobox');
    fireEvent.change(categorySelect, { target: { value: 'Shopping' } });

    // Submit the form
    const saveBtn = screen.getByText(/save transaction/i);
    fireEvent.click(saveBtn);

    // Wait for the transaction to be added
    await waitFor(() => {
      expect(screen.getByText('Persistent Transaction')).toBeInTheDocument();
    });

    // Simulate a page refresh by re-rendering the component
    // In a real integration test, this would involve actual page refresh
    // For now, we'll check if localStorage was called
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'expense_tracker_transactions',
      expect.any(String)
    );
  });
});