export interface BrandCategoryType {
   name: string;
   brand_id: number;
}

export interface RecordType extends BrandCategoryType {
   id: number;
   createdAt: string;
   lastUpdateAt: string;
}
