import { EaseIn, EasingFunction } from "./types";

const easeLinear: EasingFunction = (t, d, c, b) => {
  return (c * t) / d + b
}

const easeOutSine: EasingFunction = (t, d, c, b) => {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b
};

const easeOutQuart: EasingFunction = (t, d, c, b) => {
  return c * (1 - Math.pow(1 - (t / d), 4)) + b
}

const easeInOutQuart: EasingFunction = (t, d, c, b) => {
  const x = t / d
  return c * (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2) + b;
  }

const easeIn: EaseIn = (t, d) => {
  return (t / d) * (t / d)
};

export { easeOutSine, easeLinear, easeOutQuart, easeIn, easeInOutQuart }
