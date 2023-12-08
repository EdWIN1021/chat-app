export interface Profile {
  displayName: string;
  photoURL: string;
  requests: string[];
  userId: string;
}

export interface Friend {
  userId: string;
  chatId: string;
}
