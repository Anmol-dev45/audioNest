const conf = {
  appwriteEndPoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteArticleCollectionId: import.meta.env
    .VITE_APPWRITE_ARTICLE_COLLECTION_ID,
  appwriteLikeCollectionId: import.meta.env.VITE_APPWRITE_LIKE_COLLECTION_ID,
  appwriteAudioBucketId: import.meta.env.VITE_APPWRITE_AUDIO_BUCKET_ID,
  appwriteImageBucketId: import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID,
};

export default conf;
