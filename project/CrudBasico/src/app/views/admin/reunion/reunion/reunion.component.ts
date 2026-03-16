import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo, EquipoService, etudconv } from 'src/app/SERVICES/equipo.service';


@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent implements OnInit{

  equipo: Equipo={
    id_equipo:'',
    date:'',
    emplacement:'',
  };

  etudconv:etudconv= {
    
      id: '',
      nomprenom: '',
      cin:'',
      genre:'',
      email:'',
      numtel:'',
      nivetud:'',
      classe:'',
      objet:'',
      rapport:'',
      quest:'',
      conv:'',
      id_equipo :'',
        
  }
  etudiant={
    id: '',
    nomprenom: '',
    cin:'',
    genre:'',
    email:'',
    numtel:'',
    nivetud:'',
    classe:'',
    objet:'',
    rapport:'',
    quest:'',
    conv:'',
    id_equipo :'',

  }
  id=""
  addetudbtn=false
  



  //varibale
  ListarEquipo: Equipo[];
  listetud: etudconv[];

  constructor(private EquipoService:EquipoService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.listarEquipo();
   
  }


  listarEquipo()
  {
    this.EquipoService.getEquipos().subscribe(
      res=>{
        console.log(res);
        this.ListarEquipo=<any>res;
      },
      err => console.log(err)
    );
  }


  eliminar(id:string)
  {
    this.EquipoService.deleteEquipo(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarEquipo();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/editruen/'+id]);
  }
  agregar(){
    delete this.equipo.id_equipo;

    this.EquipoService.agregarEquipo(this.equipo).subscribe();
    this.router.navigate(['/inicio']);
  }
  getetud(id:string){
    this.id=id
    this.EquipoService.getunetud(id).subscribe(
      res=>{
        console.log('views',res);
        this.listetud=<any>res;

      },
      err => console.log(err)
    );

  }
  suppetud(id){
    alert("delete"+id)
    this.EquipoService.deleteetud(id).subscribe(res=>{
console.log("etud supp avec succ");
      window.location.reload
    })
  }
  addetudiantbtn(){
if (this.addetudbtn) {
  this.addetudbtn=false
  
}else{
  this.addetudbtn=true

}

  }
  confirmeadd(){
    console.log("test1");
    
    
    this.etudiant.id_equipo=this.id
    console.log("salem",this.etudiant);
    
    this.EquipoService.addetudiant(this.etudiant).subscribe();

  }
 
}
