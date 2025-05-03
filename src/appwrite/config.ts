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
            
           }
        } catch (error) {
            throw error
        }
    }

    // login

    async login({email,password}:LoginUserAccount){
        try {
            
        } catch (error) {
            throw error
            
        }
    }

    
    async isLoggedIn(){
        
    }
    
    async updateUser({email,password}:UpdatedUserAccount){

    }

    async logout(){

    }

}






