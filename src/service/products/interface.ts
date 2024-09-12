interface DimensionsI {
    depth: number;
    height: number;
    width: number;
  }
  
  interface MetaI {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  }
  
  interface ReviewI {
    rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
  }
  
  export interface ProductI {
    id: number;
    title: string;
    brand: string;
    category: string;
    description: string;
    dimensions: DimensionsI;
    discountPercentage: number;
    price: number;
    rating: number;
    stock: number;
    availabilityStatus: string;
    images: string[];
    meta: MetaI;
    minimumOrderQuantity: number;
    returnPolicy: string;
    reviews: ReviewI[];
    shippingInformation: string;
    sku: string;
    tags: string[];
    thumbnail: string;
    warrantyInformation: string;
    weight: number;
}