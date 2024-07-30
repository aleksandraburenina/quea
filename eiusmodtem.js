import { timeFormat, utcFormat } from 'd3-time-format';

// Using d3's utcFormat
const utcFormat$1 = utcFormat;

// Example usage:
const date = new Date();
const formattedDate = utcFormat$1('%Y-%m-%dT%H:%M:%SZ')(date);

console.log(formattedDate);  // Outputs the date in UTC format, e.g., "2024-06-21T17:20:09Z"
