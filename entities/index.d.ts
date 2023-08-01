import { SubjectId, UserId, Balance, MajorId, AccountId } from "../index";

export enum Roles {
  Student,
  Instructor,
  Admin,
}

export type SubjectMetadata = {
  subject_id: SubjectId;
  instructor_id: UserId;
  prerequisite_subject_id: SubjectId;
  thumbnail: string;
  title: string;
  description: string;
  number_of_credits: number;
  price: Balance;
  students_studying_map: Record<UserId, number>;
  students_completed: Record<UserId, number>;
  created_at: number;
  updated_at: number;
};

export interface UserMetadata {
  user_id: string;
  username: string;
  password: string;
  avatar: string;
  active: boolean;
  full_name: string;
  date_of_birth: string;
  email: string;
  phone: string;
  national_identity_card: string;
  national_identity_card_date: string;
  role: Roles;
  total_credit: number;
  balance: Balance;
  created_at: number;
  updated_at: number;
}
export interface MajorMetadata {
  major_id: MajorId;
  thumbnail: string;
  name: string;
  description: string;
  number_of_credits_required: number;
  number_students_register: number;
  number_students_studing: number;
  created_at: number;
  updated_at: number;
}

export interface SuperSchoolContractMetadata {
  spec: string;
  name: string;
  symbol: string;
  icon: string;
  base_uri: string;
  reference: string;
  reference_hash: string;
}

export interface SuperSchoolContract {
  owner_id: AccountId;
  metadata_contract: SuperSchoolContractMetadata;

  user_ids: UserId[];
  user_metadata_by_id: UserMetadata["user_id"];
  user_metadata_by_username: UserMetadata["username"];

  major_ids: MajorId;
  major_metadata_by_id: MajorMetadata["major_id"];
  subjects_per_major: Record<MajorId, SubjectId>;
}
