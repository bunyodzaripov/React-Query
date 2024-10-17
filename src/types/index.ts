export interface ParamsType {
   page: number;
   limit: number;
   search?: string;
}

export interface ModalPropType {
   id?: number;
   open: boolean;
   update: any;
   handleCancel: () => void;
}

export interface ModalProps {
   parentId?: number;
   open: boolean;
   setOpen?: (open: boolean) => void;
   handleClose: () => void;
   update?: any;
}
