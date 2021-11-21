import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  IPostMetadata,
  IPosts,
  IPost,
  IArchive,
  IBookmark,
  ILike,
  ArchiveAction,
  BookmarkAction,
  LikeAction,
  IComment,
  CommentAction,
  ISeen,
} from '../../interfaces/sharedInterfaces';

const initialState = {
  posts: [
    {
      id: '1',
      title: 'Title 1',
      createdBy: 'payal1',
      createdAt: '1 Oct 2021',
      likes: ['quepayal', 'pi', 'palak', 'mom', 'nishant', 'father'],
      comments: ['1', '2', '3', '4', '5'],
      seenBy: ['quepayal', 'pi', 'palak', 'mom', 'nishant', 'father'],
      bookmarked: ['quepayal', 'pi', 'palak', 'mom', 'nishant', 'father'],
      archived: false,
    },
    {
      id: '1',
      title: 'Title 2',
      createdBy: 'payal1',
      createdAt: '1 Oct 2021',
      likes: ['quepayal', 'pi', 'palak', 'mom', 'nishant', 'father'],
      comments: ['1', '2', '3', '4', '5'],
      seenBy: ['quepayal', 'pi', 'palak', 'mom', 'nishant', 'father'],
      bookmarked: ['quepayal', 'pi', 'palak', 'mom', 'nishant', 'father'],
      archived: false,
    },
    {
      id: '1',
      title: 'Title 3',
      createdBy: 'payal1',
      createdAt: '1 Oct 2021',
      likes: ['quepayal', 'pi', 'palak', 'mom', 'nishant', 'father'],
      comments: ['1', '2', '3', '4', '5'],
      seenBy: ['quepayal', 'pi', 'palak', 'mom', 'nishant', 'father'],
      bookmarked: ['quepayal', 'pi', 'palak', 'mom', 'nishant', 'father'],
      archived: false,
    },
  ],
} as IPosts;

//Action
export const fetchPosts = createAction<IPost[]>('posts/fetchPosts');
export const addPost = createAction<IPostMetadata>('posts/addPost');
export const deletePost = createAction<string>('posts/deletePost');
export const archivePost = createAction<IArchive>('posts/archivePost');
export const bookmarkPost = createAction<IBookmark>('posts/bookmarkPost');
export const likePost = createAction<ILike>('posts/likePost');
export const updateCommentsMetadata = createAction<IComment>(
  'posts/updateCommentMetadat'
);
export const updateSeenBy = createAction<ISeen>('posts/updateSeenBy');

//Reducer
export const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPosts, (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    })
    .addCase(addPost, (state, action: PayloadAction<IPostMetadata>) => {
      if (action.payload) {
        const metadata = action.payload;
        state.posts.push({
          id: metadata.id,
          title: metadata.title,
          createdBy: metadata.createdBy,
          createdAt: metadata.createdAt,
          likes: [],
          comments: [],
          seenBy: [],
          bookmarked: [],
          archived: false,
        });
      }
    })
    .addCase(deletePost, (state, action: PayloadAction<string>) => {
      if (action.payload) {
        const filteredPosts = state.posts.filter(
          (post) => post.id !== action.payload
        );
        state.posts = filteredPosts;
      }
    })
    .addCase(archivePost, (state, action: PayloadAction<IArchive>) => {
      const userAction: IArchive = action.payload;
      const idx = state.posts.findIndex((post) => (post.id = userAction.id));
      if (userAction.action === ArchiveAction.archive)
        state.posts[idx].archived = true;
      else {
        state.posts[idx].archived = false;
      }
    })
    .addCase(bookmarkPost, (state, action: PayloadAction<IBookmark>) => {
      const userAction: IBookmark = action.payload;
      const idx = state.posts.findIndex((post) => (post.id = userAction.id));
      if (userAction.action === BookmarkAction.bookmark)
        state.posts[idx].bookmarked.push(userAction.username);
      else {
        const filteredBookmarks = state.posts[idx].bookmarked.filter(
          (user) => user !== userAction.username
        );
        state.posts[idx].bookmarked = filteredBookmarks;
      }
    })
    .addCase(likePost, (state, action: PayloadAction<ILike>) => {
      const userAction: ILike = action.payload;
      const idx = state.posts.findIndex((post) => (post.id = userAction.id));
      if (userAction.action === LikeAction.like)
        state.posts[idx].likes.push(userAction.username);
      else {
        const filteredLikes = state.posts[idx].likes.filter(
          (user) => user !== userAction.username
        );
        state.posts[idx].likes = filteredLikes;
      }
    })
    .addCase(
      updateCommentsMetadata,
      (state, action: PayloadAction<IComment>) => {
        const userAction: IComment = action.payload;
        const idx = state.posts.findIndex((post) => (post.id = userAction.id));
        if (userAction.action === CommentAction.comment)
          state.posts[idx].comments.push(userAction.commentId);
        else {
          const filteredComments = state.posts[idx].comments.filter(
            (commentId) => commentId !== userAction.commentId
          );
          state.posts[idx].comments = filteredComments;
        }
      }
    )
    .addCase(updateSeenBy, (state, action: PayloadAction<ISeen>) => {
      const userAction: ISeen = action.payload;
      const idx = state.posts.findIndex((post) => (post.id = userAction.id));
      state.posts[idx].comments.push(userAction.username);
    })
    .addDefaultCase((state, action) => {});
});
