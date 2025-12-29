# Expense Tracker

A modern, responsive expense tracking application built with React and Vite. This application helps users manage their income and expenses with an intuitive interface and visual analytics.

## Features

- **Dashboard Overview**: Get a quick summary of your financial status
- **Transaction Management**: Add, edit, view, and delete income and expense transactions
- **Visual Analytics**: Interactive charts to visualize your spending patterns
- **Transaction Categories**: Categorize transactions (Food, Transport, Shopping, Bills, Entertainment, Other)
- **Search Functionality**: Search transactions by description
- **Date Range Filtering**: Filter transactions by date range with preset options
- **Export Functionality**: Export transactions to CSV or JSON formats
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface built with React
- **Data Persistence**: Transactions persist across page refresh using localStorage
- **Toast Notifications**: User-friendly notifications for actions
- **Form Validation**: Comprehensive validation with clear error messages

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling for fast development
- **Chart.js**: Interactive charts and data visualization
- **React Router**: Declarative routing for React applications
- **React Hook Form**: Performant, flexible forms with easy validation
- **React Testing Library**: Testing utilities for React components
- **Jest**: JavaScript testing framework
- **PropTypes**: Runtime type checking for React props
- **CSS**: Styling with modern CSS techniques

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Expence-Tracker.git
   cd Expence-Tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:5173](http://localhost:5173) to see the application

## Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Build the application for production
- `npm run lint` - Lint the codebase using ESLint
- `npm run preview` - Preview the production build locally
- `npm test` - Run unit and integration tests
- `npm test:watch` - Run tests in watch mode
- `npm test:coverage` - Generate test coverage reports

## Project Structure

```
Expence-Tracker/
├── public/                    # Static assets
├── src/                       # Source code
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   ├── __tests__/            # Test files
│   │   ├── __tests__/        # Unit tests
│   │   └── integration/      # Integration tests
│   ├── components/           # Reusable UI components
│   │   ├── Chart.jsx         # Chart visualization component
│   │   ├── TransactionForm.jsx # Transaction form component
│   │   ├── EmptyState.jsx    # Empty state component
│   │   ├── ExportButton.jsx  # Export functionality component
│   │   └── Toast.jsx         # Toast notification component
│   ├── contextApi/           # React context providers
│   │   └── TransactionContext.jsx # Transaction state management
│   ├── hooks/                # Custom React hooks
│   │   └── useTransactionCalculations.js # Transaction calculations hook
│   ├── pages/                # Page components
│   │   ├── Dashboard.jsx     # Dashboard page
│   │   └── Transaction.jsx   # Transaction management page
│   ├── utils/                # Utility functions
│   │   └── export.js         # Export functionality utilities
│   └── index.css             # Global styles
├── chart/                    # Chart components
├── package.json              # Project dependencies and scripts
└── vite.config.js            # Vite configuration
```

## Usage

1. **Dashboard**: View an overview of your financial status with total income, expenses, and balance
2. **Add Transactions**: Click "Add Transaction" to create new income or expense entries
3. **Edit Transactions**: Click the edit button on existing transactions to modify them
4. **Delete Transactions**: Click the delete button to remove transactions (with confirmation)
5. **Search**: Use the search bar to find specific transactions
6. **Filter by Date**: Use the date range filter to view transactions within a specific period
7. **Export Data**: Export your transactions to CSV or JSON format
8. **View Analytics**: See visual representations of your spending patterns in the chart

## Contributing

We welcome contributions to improve the Expense Tracker application! Here's how you can contribute:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Add tests for new functionality** (if applicable)
5. **Run tests** (`npm test`) to ensure everything works
6. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
7. **Push to the branch** (`git push origin feature/amazing-feature`)
8. **Open a Pull Request**

### Development Guidelines

- Write clean, readable, and well-documented code
- Follow existing code style and conventions
- Add unit tests for new functionality
- Ensure all tests pass before submitting a PR
- Update documentation as needed

## Testing

The application includes comprehensive testing:

- **Unit Tests**: Test individual components and utility functions
- **Integration Tests**: Test component interactions and user flows
- **Test Coverage**: Target >70% coverage for critical paths

To run tests:
```bash
npm test
```

To run tests in watch mode:
```bash
npm run test:watch
```

To generate coverage reports:
```bash
npm run test:coverage
```

## Accessibility

The application follows WCAG 2.1 AA accessibility guidelines:

- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels and roles
- Sufficient color contrast
- Semantic HTML structure

## Responsive Design

The application is designed to work on all screen sizes:

- Mobile (320px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

## Changelog

### v1.0.0
- Initial release with core functionality
- Transaction management (add, edit, delete)
- Dashboard with financial overview
- Chart visualization
- Data persistence with localStorage
- Responsive design

### v1.1.0
- Added transaction categories
- Implemented search functionality
- Added date range filtering
- Export to CSV/JSON functionality
- Toast notifications
- Improved form validation
- Enhanced empty states
- Added comprehensive testing

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Charts by [Chart.js](https://www.chartjs.org/)
- Testing with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/)
- Form handling with [React Hook Form](https://react-hook-form.com/)