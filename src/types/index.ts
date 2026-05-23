export interface UserListProps {
  id : number;
  name: string;
  age: number;
}
export interface ProvideActionProps {
    add : (id : number | undefined) => void;
    remove : (id : number | undefined) => void;
}