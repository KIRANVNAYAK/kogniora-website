// utils/currency.ts

export const getCurrencyByCountry = (country: string): string => {
  const usdCountries = ['USA', 'Canada'];
  const euroCountries = [
    'United Kingdom', 'Germany', 'France', 'Netherlands', 'Sweden', 'Norway',
    'Switzerland', 'Belgium', 'Ireland', 'Denmark', 'Finland', 'Austria', 'Portugal'
  ];
  const audCountries = ['Australia'];

  if (usdCountries.includes(country)) return 'USD';
  if (euroCountries.includes(country)) return 'EUR';
  if (audCountries.includes(country)) return 'AUD';
  
  return 'USD'; // Default fallback
};

// Optional: for displaying with symbols
export const formatCurrency = (amount: number, country: string): string => {
  const currency = getCurrencyByCountry(country);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0
  });

  return formatter.format(amount);
};
