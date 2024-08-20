import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";
class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndPoint)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPodcast({
    title,
    slug,
    description,
    author_id,
    audio_id,
    cover_image_id,
    tags,
    duration,
    category,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        ID.unique(),
        {
          title,
          slug,
          description,
          author_id,
          audio_id,
          cover_image_id,
          tags,
          duration,
          category,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async getPodcasts(queries = []) {
    try {
      const data = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        queries
      );
      return data.documents;
    } catch (error) {
      throw error;
    }
  }

  async updatePodcast(
    id,
    {
      title,
      slug,
      description,
      audio_id,
      cover_image_id,
      tags,
      duration,
      category,
    }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        id,
        {
          title,
          slug,
          description,
          audio_id,
          cover_image_id,
          tags,
          duration,
          category,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePodcast(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getPodcast(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async #uploadFile(file, bucketId) {
    try {
      return await this.bucket.createFile(bucketId, ID.unique(), file);
    } catch (error) {
      throw error;
    }
  }

  uploadAudio(audio) {
    return this.#uploadFile(audio, conf.appwriteAudioBucketId);
  }

  uploadImage(image) {
    return this.#uploadFile(image, conf.appwriteImageBucketId);
  }

  async getAudio(id) {
    try {
      await this.bucket.getFile(conf.appwriteAudioBucketId, id);
    } catch (error) {
      throw error;
    }
  }
  async getImagePreview(id) {
    return this.bucket.getFilePreview(conf.appwriteImageBucketId, id);
  }
}

const service = new Service();

export default service;
