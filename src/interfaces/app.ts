export interface ICurrentUser {
  // _id: string;
  // username: string;
  // email: string;
  // amount: number;
  // avatar: string;
  // ownedLands: [number];
  // address: string;
  isAuthorized: boolean;
}

export interface IApp {
  currentUser: ICurrentUser | null;
  isSignup: boolean;
}
