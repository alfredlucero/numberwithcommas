// Converts numbers in thousands, millions, billions, etc. to have proper commas i.e. 4500 to "4,500" or "4500" to "4,500"
export const numWithCommas = (n: string | number = "") => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
