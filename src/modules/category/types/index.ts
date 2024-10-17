export interface CategoryType {
   id: number;
   name: string;
}

export interface RecordType extends CategoryType {
   createdAt: string;
   lastUpdateAt: string;
}
