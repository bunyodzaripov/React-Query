export interface ProductType {
   id: number;
   name: string;
}

export interface RecordType extends ProductType {
   createdAt: string;
   lastUpdateAt: string;
}
