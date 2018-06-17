export class RecipeInfo{
    id: string="";
    name:string="";
    components:string="";
    preparationTime:string="";
    difficulty:string="";
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

    name:string="";
    components:string="";
    preparationTimeInMinutes:Uint8Array;
    difficulty:Uint8Array;
}
