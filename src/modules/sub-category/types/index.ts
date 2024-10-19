export interface SubCategoryType {
   id?: number | undefined;
   name: string;
   parent_category_id?: number;
   params?: any;
}

export interface RecordType extends SubCategoryType {
   id: number;
   createdAt: string;
   lastUpdateAt: string;
}
