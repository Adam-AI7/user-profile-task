export interface UserProfile {
    userId:             number;
    username:           string;
    email:              string;
    profilePic:         string;
    bio:                string;
    homepage?:          string;
    hobbies:            string[];
    fullName:           string;
    location:           string;
    birthDate?:         string;
    followersCount:     number;
    followingCount:     number;
    postsCount:         number;
    joinedDate:         Date;
    verifiedStatus:     boolean;
    languages:          string[];
    education?:         string;
    work?:              string;
    relationshipStatus: string;
    gender:             Gender;
    pronouns:           Pronouns;
    interests:          string[];
    coverPhoto:         string;
    privacySettings:    PrivacySettings;
    lastActive:         string;
    statusMessage:      string;
    contactInfo:        ContactInfo;
    customFields:       CustomField[];
}

export interface ContactInfo {
    phone:          string;
    secondaryEmail: string;
}

export interface CustomField {
    fieldName:  string;
    fieldValue: string;
}

export enum Gender {
    Diverse = "Diverse",
    Female = "Female",
    Male = "Male",
}

export interface PrivacySettings {
    showEmail:     boolean;
    showBirthDate: boolean;
}

export enum Pronouns {
    HeHim = "he/him",
    SheHer = "she/her",
    TheyThem = "they/them",
}
export type searchInput ={
    field:string;
    value:string;
    isFilter?:boolean;
}