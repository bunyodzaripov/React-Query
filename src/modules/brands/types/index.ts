export interface BrandsType {
   id?: number;
   name: string;
   description: string;
   categoryId: number;
   file?: string | File;
}

export interface RecordType extends BrandsType {
   id: number;
   createdAt: string;
   lastUpdateAt: string;
}
