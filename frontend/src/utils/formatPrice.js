export const formatPrice = (price) => {
    if (!price && price !== 0) return "N/A";
  
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(price);
  };
  