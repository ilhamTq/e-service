export default interface User_Type {
  user_id?: number;
  user_nama: string;
  user_nip?: string;
  user_email: string;
  user_image?: string | null;
  user_hp: string;
  user_alamat: string;
  user_pass: string;
  user_lastip?: string;
  user_lastlogin?: string;
  user_created?: Date;
  user_updated?: Date;
  user_deleted?: Date | null;
}
