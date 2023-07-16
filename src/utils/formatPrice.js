export default function formatPrice(price = 0, withCurrency = true) {
  const number = parseInt(String(price).replace(/\s/g, "").replace(",", "."));
  const priceValue = isNaN(number) ? 0 : number;
  return (
    new Intl.NumberFormat("ru-RU").format(String(priceValue)) +
    (withCurrency ? " ₽" : "")
  );
}
