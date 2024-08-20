import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";
class Auth {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndPoint)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async signup({ email, password, name }) {
    try {
      const currentUser = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (currentUser) {
        await this.login({ email, password });
      }
      return currentUser;
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new Auth();

export { Auth };
export default authService;
