export interface MarvelCharacterDataWrapper {
    code?: number;
    status?: string;
    data?: MarvelCharacterDataContainer;
    attributionText?: string;
    attributionHTML?: string;
    etag?: string;
  }
  
  export interface MarvelCharacterDataContainer {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results?: MarvelCharacter[];
  }
  
  export interface MarvelCharacter {
    id?: number;
    name?: string;
    description?: string;
    modified?: Date;
    resourceURI?: string;
    urls?: MarvelUrl[];
    thumbnail?: MarvelImage;
    comics?: MarvelComicList;
    stories?: MarvelStoryList;
    events?: MarvelEventList;
    series?: MarvelSeriesList;
  }
  
  export interface MarvelUrl {
    type?: string;
    url?: string;
  }
  
  export interface MarvelImage {
    path?: string;
    extension?: string;
  }
  
  export interface MarvelComicList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: MarvelComicSummary[];
  }
  
  export interface MarvelComicSummary {
    resourceURI?: string;
    name?: string;
  }
  
  export interface MarvelStoryList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: MarvelStorySummary[];
  }
  
  export interface MarvelStorySummary {
    resourceURI?: string;
    name?: string;
    type?: string;
  }
  
  export interface MarvelEventList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: MarvelEventSummary[];
  }
  
  export interface MarvelEventSummary {
    resourceURI?: string;
    name?: string;
  }
  
  export interface MarvelSeriesList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: MarvelSeriesSummary[];
  }
  
  export interface MarvelSeriesSummary {
    resourceURI?: string;
    name?: string;
  }