import React from 'react'
import { createRoot, } from 'react-dom/client'
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary', () => {
    it('should be defined', () => {
        expect(ErrorBoundary).toBeDefined();
    });
    it('should render without crashing', () => {
        const div = document.createElement('div');
        const root = createRoot(div)
        root.render(<ErrorBoundary />);
        root.unmount();
    });
});
