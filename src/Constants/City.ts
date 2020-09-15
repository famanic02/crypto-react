type CityType = {
  [stateId: number]: Array<any>;
};
export const CITY: CityType = {
  1: [
    { value: 10, label: 'Geneva' },
    { value: 11, label: 'Seneca' },
    { value: 12, label: 'Glen Cove' },
    { value: 13, label: 'Glens Falls' },
    { value: 14, label: 'Gloversville' },
    { value: 15, label: 'Hornell' },
    { value: 16, label: 'Hudson' },
    { value: 17, label: 'Ithaca' },
    { value: 18, label: 'Jamestown' },
    { value: 19, label: 'Johnstown' },
  ],
  2: [
    { value: 1, label: 'Afton' },
    { value: 2, label: 'Agency' },
    { value: 3, label: 'Ainsworth' },
    { value: 4, label: 'Akron' },
    { value: 5, label: 'Albert' },
  ],
};

export default CITY;
