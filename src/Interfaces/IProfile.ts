export interface IProfile {
  npi: string;
  phone: string;
  first_name: string;
  last_name: string;
  specialty: string;
  city: string;
  interview_date: number;
  state: string;
  introduction: string;
  ehr_compatibility: string;
  expected_hourly_rate: string;
  profile_pic: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  profile: IProfile;
}
