import { j as json } from "../../../../chunks/index.js";
const GET = async () => {
  const res = await fetch("api/postcodes");
  const postcodes = await res.json();
  const appPostcodes = postcodes.map((postcode) => {
    return {
      buildingName: postcode.building_name,
      line1: postcode.line_1,
      line2: postcode.line_2,
      line3: postcode.line_3,
      town: postcode.post_town,
      country: postcode.country,
      postcode: postcode.postcode
    };
  });
  return json(appPostcodes);
};
export {
  GET
};
