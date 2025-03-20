function formatSingleNumber(num: number): string {
  return num.toString().padStart(2, '0');
}

export default formatSingleNumber;
