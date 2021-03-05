export const isOperator = value => 
  !isNaN(value) || 
  value === '.' || 
  value === '=';
