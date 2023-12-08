export interface Profile {
  displayName: string;
  photoURL: string;
  requests: string[];
  userId: string;
  chatId: string;
  friends: Friend[];
}

export interface Friend {
  userId: string;
  chatId: string;
  photoURL: string;
  displayName: string;
}
