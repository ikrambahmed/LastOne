import { grade } from './grade';
import { fonction } from './fonction';
import { classe } from './classe';
import { categorie } from './categorie';

export class missionnaire {
  public cin : String ;
   public matricule : String ;
   public nom  :String ;
   public nomL : String ;
   public prenom : string ; 
   public prenomL : String;
   public nationalite : String ; 
   public nationaliteL :String ; 
   public datenaissance : Date ;
   public place_naissance:String ;
   public rib :String ;
   public date_cin : Date ; 
   public place_cin:String;
   public niveau:String ;
   public ministr:String;
   public groupe:String;   
   public graade :grade;
   public fonnction:fonction ; 
   public classee:classe ; 
   public cat:categorie ;
   
    constructor(
      cin? : String ,
       matricule? : String , 
       nom?  :String , 
     nomL? : String ,
       prenom? : string , 
      prenomL? : String,
     nationalite? : String , 
      nationaliteL? :String , 
   datenaissance? : Date , 
    place_naissance?:String ,
     rib ?:String , 
      date_cin? : Date , 
     place_cin?:String,
    niveau?:String ,
       ministr?:String,
        groupe?:String,    
       graade ?:grade, 
        fonnction?:fonction , 
      classee?:classe , 
       cat?:categorie  ) {
          this.graade= new grade() ; 
          this.fonnction = new fonction() ; 
          this.classee = new classe() ; 
          this.cat = new categorie() ; 

        }; 

}