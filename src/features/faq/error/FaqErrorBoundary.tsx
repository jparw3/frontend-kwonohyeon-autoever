import React from "react";
import styles from "./FaqErrorBoundary.module.scss";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class FaqErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("FAQ Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error_container} role="alert">
          <h2>FAQ를 불러오는 중 문제가 발생했습니다</h2>
          <p>잠시 후 다시 시도해 주세요</p>
          <button
            onClick={() => window.location.reload()}
            className={styles.retry_button}
          >
            새로고침
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
