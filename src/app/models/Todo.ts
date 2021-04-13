export class Todo{
    private id:number;
    private title:string;
    private description:string;

    constructor(id:number, title:string, description:string){
        this.id = id;
        this.title = title;
        this.description = description;
    }
    
    public getId():number{
        return this.id;
    }
    public setId(id:number):void{
        this.id = id;
    }

    public getTitle():string{
        return this.title;
    }
    public setTitle(title:string):void{
        this.title = title;
    }
    public getDesc():string{
        return this.description;
    }
    public setDesc(desc:string):void{
        this.description = desc;
    }

}