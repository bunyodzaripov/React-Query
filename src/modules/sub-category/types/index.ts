export interface SubCategoryType {
   id: number;
   name: string;
   parent_category_id?: number;
   params?: any;
}

export interface RecordType extends SubCategoryType {
   createdAt: string;
   lastUpdateAt: string;
}
