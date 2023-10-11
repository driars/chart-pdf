export type Arrest = {
  year: number;
  arrests: number;
};

export type ArrestResponse = {
  title: string;
  keys: [string];
  data: [
    {
      date_year: string;
      [key: string]: string;
    }
  ];
};
