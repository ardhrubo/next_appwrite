import conf from '@/conf/config';
import {Client,Account,ID} from 'appwrite'


type CreateUserAccound = {
    email: string,
    password: string,
    name:string,
}


type LoginUserAccount = {
    email: string,
    password: string,
}

type UpdatedUserAccount = {
    email: string,
    password: string
}


const appwrteClient = new Client()
appwrteClient
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

export const account = new Account(appwrteClient);

export class AppwriteService {
    // new record of user inside appwrite

    async createUserAccount({email,password,name}:CreateUserAccound){
        try {
           const userAccount =  await account.create(ID.unique(),email,password,name)
           if(userAccount){
            return this.login({email, password})
           }else{
            return userAccount
           }
        } catch (error) {
            throw error
        }
    }

    // login

    async login({email,password}:LoginUserAccount){
        try {
            return await account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
            
        }
    }

    
    async isLoggedIn():Promise<boolean>{

        try {
            const data = await this.getCurrentUser()
            return Boolean(data)
        } catch (error) {
            
        }

        return false
    }
    
    async getCurrentUser(){
        try {
            
            const user = await account.get()
            return account.get()
  
        } catch (error) {

            console.log("gettingCurrentUserError:",error)
            
        }
    }

    async updateUser({email,password}:UpdatedUserAccount){
        try {
            
        } catch (error) {
            
        }


    }

    async logout(){
            try {
                return await account.deleteSession("current")
                
            } catch (error) {
                console.log("logout errro",error)
            }
    }

}


const appwriteService = new AppwriteService()

export default appwriteService

