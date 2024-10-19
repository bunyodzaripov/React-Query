export interface ParamsType {
   page: number;
   limit: number;
   search?: string;
}

export interface ModalPropType {
   id?: number | undefined;
   open: boolean;
   update: any;
   handleCancel: () => void;
}

export interface ModalProps {
   id?: number | undefined;
   parentId?: number;
   open: boolean;
   setOpen?: (open: boolean) => void;
   handleClose: () => void;
   update?: any;
}

export interface PaginationType {
   current: number;
   pageSize: number;
   total: undefined;
   showSizeChanger: boolean;
   pageSizeOptions: number[];
}
