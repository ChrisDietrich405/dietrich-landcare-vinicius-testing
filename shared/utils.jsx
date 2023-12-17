export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const DateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long",
});

export const getSalt = () => {
  const param = process.env.SALT_KEY
  const newString = param.replaceAll("_", "$");
  return newString;
};
