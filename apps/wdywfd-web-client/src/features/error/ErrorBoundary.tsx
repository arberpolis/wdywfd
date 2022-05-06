import React, { PropsWithChildren } from 'react'

class ErrorBoundary extends React.Component<PropsWithChildren<{}>, {hasError: boolean}, {}> {

    constructor(props:  PropsWithChildren<{}>) {
        super(props);
        this.state = { ...this.state, hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary
