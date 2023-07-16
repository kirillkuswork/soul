export type FlatType = {
  address: string;
  area: number;
  areaKitchen: number;
  areaLiving: number;
  area_bti: number;
  area_project: number;
  attributes: {
    balcony: boolean;
    bath: boolean;
    cornerGlazing: boolean;
    dressingRoom: boolean;
    finish: boolean;
    frenchBalcony: boolean;
    highCeiling: boolean;
    laundry: boolean;
    livingKitchen: boolean;
    loggia: boolean;
    masterBedroom: boolean;
    panoramicGlazing: boolean;
    unfinished: boolean;
    whiteBox: boolean;
  };
  base_price: null | number | string;
  benefits: {
    cash: Array<number | string>;
    installment: Array<number | string>;
    mortgage: Array<number | string>;
  };
  block: {
    id: number;
    name: string;
  };
  block_id: number;
  booking: {
    cost: number;
    period: number;
    status: string;
  };
  bookingStatus: string;
  bulk: {
    building_status: number;
    id: number;
    latitude: null | number | string;
    longitude: null | number | string;
    max_area: number;
    max_price: number;
    min_area: number;
    min_price: number;
    name: string;
    settlement_date: string;
    settlement_quarter: number;
    settlement_year: number;
    type_id: number;
  };
  bulk_id: number;
  ceilingHeight: number;
  equalizerBenefit: number | string | null;
  finish: {
    isFinish: boolean;
    whiteBox: boolean;
  };
  floor: number;
  guid: string;
  has_advertising_price: number;
  id: number;
  isResell: boolean;
  is_penthouse: number;
  is_settlement: number;
  is_studio: number;
  layout_id: number;
  mainBenefit: [];
  meterPrice: number;
  meter_price: number;
  mln_price: string;
  name: string;
  number: string;
  number_stage: number;
  price: string;
  real_price: number;
  roomArea: any;
  rooms: number;
  rooms_fact: number;
  rooms_text: null | number | string;
  rooms_text_short: null | number | string;
  section: {
    floorsCount: number;
    id: number;
    number: number;
  };
  section_id: number;
  sq_rounded: string;
  status: string;
  t_price: string;
  type_id: number;
  windowView: null | number | string;
};



export type AttributesType = {
  balcony: boolean;
  bath: boolean;
  cornerGlazing: boolean;
  dressingRoom: boolean;
  finish: boolean;
  frenchBalcony: boolean;
  highCeiling: boolean;
  laundry: boolean;
  livingKitchen: boolean;
  loggia: boolean;
  masterBedroom: boolean;
  panoramicGlazing: boolean;
  unfinished: boolean;
  whiteBox: boolean;
};

export type AdvantageType = {
  name: string;
  value: string;
  active: boolean;
};
