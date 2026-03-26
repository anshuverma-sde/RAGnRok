"use client";

import * as React from "react";

interface Props {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return <>{this.props.fallback}</>;
      }
      return (
        <div className="flex h-full w-full items-center justify-center p-4 bg-error/10 text-error rounded-xl border border-error/20">
          <div className="text-center">
            <h3 className="font-semibold mb-1">Something went wrong</h3>
            <p className="text-sm opacity-80">This section failed to load.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
