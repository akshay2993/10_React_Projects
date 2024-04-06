import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        const userAccount = await this.account.create(ID.unique(), email, password, name)
        if(userAccount){
            return this.login(email, password)
        }else{
            return userAccount
        }
    }
    async login(email, password){
        return account.createEmailSession(email, password)
        
    }
    async getCurrentuser(){
        try {
            return this.account.get()
        } catch (error) {
            console.log('Appwrite Service :: getCurrentUser() ::', error)
        }
        return null
    }
    async logout(){
        try {
            return this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite Service :: logout() :: ", error)
        }
    }
}


const authService = new AuthService()

export default authService