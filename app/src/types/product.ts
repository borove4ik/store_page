// src/types/product.ts
export type ApiProduct = {
    id?: number;
    name?: string;
    title?: string;
    product_name?: string;
  
    // возможные варианты для цены
    price?: number | string;
    price_rub?: number | string;
    price_value?: number | string;
  
    // возможные варианты для картинок
    image?: string;
    main_image?: string;
    picture?: string;
    pictures?: string[];
    images?: string[];
  
    // любые другие поля
    [key: string]: any;
  };
  
  export type Product = {
    id: number;
    name: string;
    image: string;
    price: string | number;
  };