const cities = [
  { city: "Caracas", country: "Venezuela", key: 1, countryCode: "VE" },
  { city: "Madrid", country: "Spain", key: 2, countryCode: "ES" },
  { city: "Lisbon", country: "Portugal", key: 3, countryCode: "PT" },
  { city: "Lima", country: "Peru", key: 4, countryCode: "PE" },
  { city: "Cordoba", country: "Argentina", key: 5, countryCode: "AR" },
];

export const getCities = () => cities;

export const getCountryNameByCountryCode = (countryCode) =>
  cities.filter((c) => c.countryCode === countryCode)[0].country;
