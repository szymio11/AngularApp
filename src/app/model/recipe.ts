export class RecipeInfo{
    id: string="";
    name:string="";
    components:string="";
    preparationTime:string="";
    difficulty:Uint8Array;
    created:string;
    user:UserInfo;
    rating: DoubleRange;

}
export class UserInfo{
    id:string="";
    email:string="";
    name:string="";
}

export class RecipeUpdate{

    email:string="";
    components:string="";
    preparationTime:Uint8Array;
    difficulty:Uint8Array;
}
