import React from 'react';

interface SeparatorProps {
  height?: string; // Default height can be set
  color?: string; // Default color can be set
  width?: string; // Optionally make width adjustable
  style?: React.CSSProperties; // Allow passing custom styles
}

export const Separator: React.FC<SeparatorProps> = ({
  height = '1px',
  color = '#ccc',
  width = '100%',
  style = {},
}) => {
  return (
    <div
    className='container'
      style={{
        height,
        backgroundColor: color,
        width,
        ...style,
      }}
    />
  );
};
