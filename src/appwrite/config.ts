import conf from '@/conf/config';
import {Client,Account,ID,Databases} from 'appwrite'

type CreateUserAccound = {
    email: string,
    password: string,
    name:string,
}


type LoginUserAccound = {
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
export const databases = new Databases(appwrteClient);
