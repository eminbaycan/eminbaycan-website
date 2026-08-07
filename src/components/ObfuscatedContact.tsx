import React, { useState, useEffect } from 'react';

interface ObfuscatedContactProps {
  encodedValue: string;
  type?: 'email' | 'phone' | 'text';
  className?: string;
  children?: React.ReactNode;
}

export function ObfuscatedContact({ encodedValue, type = 'text', className = '', children }: ObfuscatedContactProps) {
  const [value, setValue] = useState('...');
  const [isDecoded, setIsDecoded] = useState(false);

  useEffect(() => {
    // Component yüklendiğinde Base64'ü çöz
    try {
      const decoded = atob(encodedValue);
      setValue(decoded);
      setIsDecoded(true);
    } catch (e) {
      console.error("Decoding failed", e);
    }
  }, [encodedValue]);

  if (!isDecoded) {
    return <span className={className}>{children || '...'}</span>;
  }

  if (type === 'email') {
    return (
      <a href={`mailto:${value}`} className={className}>
        {children || value}
      </a>
    );
  }

  if (type === 'phone') {
    return (
      <a href={`tel:${value.replace(/\s+/g, '')}`} className={className}>
        {children || value}
      </a>
    );
  }

  return <span className={className}>{children || value}</span>;
}
