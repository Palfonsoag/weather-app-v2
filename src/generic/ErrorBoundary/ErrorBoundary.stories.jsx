import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const ComponentWithOutError = () => <h1>No Error</h1>;

const ComponentWithError = () => <h1>{undefined.error}</h1>;

export const ErrorBoundaryWithError = () => (
  <ErrorBoundary>
    <ComponentWithError />
  </ErrorBoundary>
);
export const ErrorBoundaryWithoutError = () => (
  <ErrorBoundary>
    <ComponentWithOutError />
  </ErrorBoundary>
);

export default {
  title: "ErrorBoundary",
  component: ErrorBoundary,
};
