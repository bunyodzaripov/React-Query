export interface CategoryType {
   id: number;
   name: string;
}

export interface RecordType extends CategoryType {
   createdAt: string;
   lastUpdateAt: string;
   image?: string;
}

export interface PaginationType {
   current: number;
   pageSize: number;
   total: undefined;
   showSizeChanger: boolean;
   pageSizeOptions: number[];
}
