import { Component } from "react";

/**
 * Keeps a failed 3D scene from taking the whole page down.
 *
 * React Three Fiber rethrows any load error (a model, a texture, the HDR
 * environment fetched from a CDN) up to the nearest error boundary. Without
 * one, a single failed request unmounts the entire app to a blank screen.
 */
class SceneErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error("3D scene failed to load:", error);
  }

  render() {
    return this.state.failed ? (this.props.fallback ?? null) : this.props.children;
  }
}

export default SceneErrorBoundary;
