import React, { useEffect, useState, useRef } from 'react';

/**
 * Helper to parse string values like "10,000+", "98.4%", "50+", "5" into numeric components
 */
function parseValueString(str) {
  if (typeof str === 'number') {
    return { target: str, decimals: 0, hasCommas: false, prefix: '', suffix: '' };
  }

  const stringVal = String(str || '');
  // Match prefix (non-digits), digits with commas/dots, and suffix (non-digits)
  const match = stringVal.match(/^([^0-9.]*)([0-9,.]+)(.*)$/);
  if (!match) {
    return { target: 0, decimals: 0, hasCommas: false, prefix: '', suffix: stringVal };
  }

  const prefix = match[1] || '';
  const numStr = match[2];
  const suffix = match[3] || '';

  const hasCommas = numStr.includes(',');
  const cleanNumStr = numStr.replace(/,/g, '');
  const target = parseFloat(cleanNumStr) || 0;

  const decimalParts = cleanNumStr.split('.');
  const decimals = decimalParts.length > 1 ? decimalParts[1].length : 0;

  return { target, decimals, hasCommas, prefix, suffix };
}

export default function AnimatedCounter({ value, duration = 2000, className = "" }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const parsed = parseValueString(value);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // easeOutCubic curve for super smooth counter deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const nextValue = easeProgress * parsed.target;
      setCurrentValue(nextValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasAnimated, parsed.target, duration]);

  // Format value to string
  const formattedNumber = (() => {
    if (!hasAnimated) return '0';
    let valStr = currentValue.toFixed(parsed.decimals);
    if (parsed.hasCommas) {
      const parts = valStr.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      valStr = parts.join('.');
    }
    return valStr;
  })();

  return (
    <span ref={elementRef} className={className}>
      {parsed.prefix}{hasAnimated ? formattedNumber : '0'}{parsed.suffix}
    </span>
  );
}
