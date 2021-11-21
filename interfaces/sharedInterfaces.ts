export enum FollowersAction {
  add,
  remove,
}

export enum FollowingAction {
  follow,
  unfollow,
}

export enum ArchiveAction {
  archive,
  unarchive,
}

export enum BookmarkAction {
  bookmark,
  unbookmark,
}

export enum LikeAction {
  like,
  unlike,
}

export enum CommentAction {
  comment,
  uncomment,
}

export interface IFollowers {
  username: string;
  action: FollowersAction;
}

export interface IFollowing {
  username: string;
  action: FollowingAction;
}

export interface IArchive {
  id: string;
  username: string;
  action: ArchiveAction;
}

export interface IBookmark {
  id: string;
  username: string;
  action: BookmarkAction;
}

export interface ILike {
  id: string;
  username: string;
  action: LikeAction;
}

export interface IComment {
  id: string;
  commentId: string;
  action: CommentAction;
}

export interface ISeen {
  id: string;
  username: string;
}

export interface IUser {
  username: string;
  name: string;
  email: string;
  followers: Array<string>;
  following: Array<string>;
}

export interface IPost {
  id: string;
  title: string;
  createdBy: string;
  createdAt: string;
  likes: Array<string>;
  comments: Array<string>;
  seenBy: Array<string>;
  bookmarked: Array<string>;
  archived: boolean;
}

export interface IPosts {
  posts: IPost[];
}

export interface IPostMetadata {
  id: string;
  title: string;
  createdBy: string;
  createdAt: string;
}

export interface ICommentMetadata {
  id: string;
  content: string;
  createdBy: string;
  createdAt: string;
}
