export interface IProfile {
  user: IUser;
  comments: IComment[];
}


export interface IUser {
  name: string;
  address?: string;
  avatar: string;
  likes?: number;
  followers?: number;
  following?: number;
}

export interface IComment {
  user: IUser;
  text: string;
  date: Date;
}
