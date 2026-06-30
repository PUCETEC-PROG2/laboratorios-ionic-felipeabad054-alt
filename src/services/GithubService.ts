import axios from "axios";
import { Repository } from "../interfaces/Repository";
import { GithubUser } from "../interfaces/GithubUser";


const GITHUB_API_URL = 
    import.meta.env.VITE_GITHUB_API_URL || 
    "https://api.github.com";


const GITHUB_API_TOKEN = 
    import.meta.env.VITE_GITHUB_API_TOKEN;



const apiClient = axios.create({

    baseURL: GITHUB_API_URL,

    headers: {

        Authorization: `Bearer ${GITHUB_API_TOKEN}`,

        Accept: "application/vnd.github.v3+json"

    }

});



// ===============================
// GET - Obtener repositorios
// ===============================

export const fetchRepositories = async (): Promise<Repository[]> => {

    try {


        const response = await apiClient.get("/user/repos", {

            params: {

                per_page: 100,

                sort: "created",

                direction: "desc",

                affiliation: "owner",

                t: Date.now()

            }

        });



        if(response.status !== 200){

            throw new Error(response.statusText);

        }


        return response.data as Repository[];



    } catch(error){


        console.log(
            "Error obteniendo repositorios",
            error
        );


        throw new Error(
            (error as Error).message
        );

    }

};





// ===============================
// POST - Crear repositorio
// Endpoint: POST /user/repos
// ===============================


export const createRepository = async (

    repoData:{
        name:string;
        description:string;
    }


): Promise<Repository> => {



    try {


        const response = await apiClient.post(

            "/user/repos",

            {

                name: repoData.name,

                description: repoData.description,

                private:false

            }

        );



        if(response.status !== 201){

            throw new Error(
                response.statusText
            );

        }



        return response.data as Repository;



    }catch(error){


        console.log(
            "Error creando repositorio",
            error
        );


        throw new Error(
            (error as Error).message
        );


    }

};





// ===============================
// GET - Información del usuario
// ===============================


export const fetchUserInfo = async (): Promise<GithubUser | null> => {


    try{


        const response = await apiClient.get("/user");



        if(response.status !== 200){


            throw new Error(
                response.statusText
            );

        }



        return response.data as GithubUser;



    }catch(error){


        console.log(
            "Error obteniendo usuario",
            error
        );


        throw new Error(
            (error as Error).message
        );


    }

};