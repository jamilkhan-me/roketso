import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "£56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "£59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "£44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "£31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "£26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "£20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "£16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "£10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "£31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "£26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "The Michelin Guide Award",
    subtitle:
      "The Michelin Guide awards stars to exceptional restaurants worldwide, including Japan.",
  },
  {
    imgUrl: images.award01,
    title: "Japanese culinary academy in UK",
    subtitle: "Best Japanese cuisine academy in the UK.",
  },
  {
    imgUrl: images.award05,
    title: "Japanese Cuisine Goodwill Ambassador",
    subtitle:
      "The Chef was awarded the prestigious Japanese Cuisine Goodwill Ambassador in 2020.",
  },
  {
    imgUrl: images.award03,
    title: "Minister’s Award",
    subtitle:
      "The Minister’s Award for Overseas Promotion of Japanese Food in 2022 from The Government of Japan.",
  },
];

//eslint-disable-next-line
export default { wines, cocktails, awards };
