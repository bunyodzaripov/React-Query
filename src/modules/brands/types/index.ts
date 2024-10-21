export interface brandsType {
   name: string;
   description: string;
   categoryId: number;
   file?: string | File;
}

export interface RecordType extends brandsType {
   id: number;
   createdAt: string;
   lastUpdateAt: string;
}
