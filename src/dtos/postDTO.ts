export interface PostDTO{
    id: string;
    userId: string;
    idIgraja: string;
    textPost: string;
    imagePost: string;
    date: string;
    user: {
    id: string;
    idIgreja: string;
    name: string;
    userName: string;
    email: string;
    senha: string;
    image: string
    }
}