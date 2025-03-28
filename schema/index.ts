export enum EListType {
  EMPTY = 'EMPTY',
  TEXT = 'TEXT',
}

export enum EInformationType {
  ARRAY = 'ARRAY',
  CHECK = 'CHECK',
  TEXT = 'TEXT',
}

export enum ECompany {
  APACARE = 'ApaCare',
  ORALACTIN = 'OraLactin',
}

export interface Product {
  id: string;
  priority: string;
  category: string;
  photos: IPhoto[];
  company: ECompany;
  label: string[];
  name: string;
  description: string;
  isHomePageRecommended: boolean;
  textsAfterTitle: string[];
  list: IList;
  textsAfterList: string[];
  methodOfUse: IMethodOfUse[];
  textAfterMethodOfUse: string;
  information: IInformation[];
}

export interface IPhoto {
  url: string;
  priority: number;
}

export interface IList {
  type: EListType;
  elementsText: IElementText[];
}

export interface IElementText {
  title: string;
  text: string;
}

export interface IMethodOfUse {
  priority: number;
  text: string;
}

export interface IInformation {
  priority: number;
  title: string;
  text?: string;
  value?: boolean;
  type: EInformationType;
}

export interface IRecommendedProducts {
  id: string;
  name: string;
  photo: string;
  description: string;
}
