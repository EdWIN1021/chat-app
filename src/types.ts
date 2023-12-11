export interface Profile {
  displayName: string;
  photoURL: string;
  requests: string[];
  userId: string;
  chatId: string;
  friends: Friend[];
  online: boolean;
}

export interface Friend {
  uid(uid: any): Profile | PromiseLike<Profile>;
  userId: string;
  chatId: string;
  photoURL: string;
  displayName: string;
}
