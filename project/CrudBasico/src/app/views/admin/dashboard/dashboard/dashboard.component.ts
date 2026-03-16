import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { EquipoService } from 'src/app/SERVICES/equipo.service';
import { EtablissementService } from 'src/app/SERVICES/etablissement.service';
import { UserService } from 'src/app/SERVICES/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'chartDemo';
retab:any=[]
remonth:any={
  January:0,
   February:0, 
   March:0,
    April:0,
    May:0,
    June:0,
    July:0,
  August:0,
   September:0,
   October:0,
   November:0,
   December:0,
}
nbretudiants:any=[]
dataarray:any=[]
nbretablissement:any=[]
  constructor (private as:EquipoService,private ds: EtablissementService,private userService:UserService,private router:Router){
    
  }
  ngOnInit() {
    let token=localStorage.getItem('token')
    if (token) {
      this.as.getalletud().subscribe(res=>{

        this.nbretudiants=res
      })

      this.ds.alletablissement().subscribe((data) => { 
       this.nbretablissement=data
      });
  
      this.userService.getallusers().subscribe(
        (data: any) => {
          this.dataarray = data.data;
        },
        (error: any) => {
          console.log(error);
        }
      );
  
  
      this.as.getEquipos().subscribe(
        res=>{
          console.log(res);
          this.retab=res;
          for (let i = 0; i < this.retab.length; i++) {
        
            var str=this.retab[i].date.slice(0,7)
            console.log("str",str);
            
           switch (str) {
            case '2023-01':
              this.remonth.January+=1;
              break;
              case '2023-02':
                this.remonth.February+=1;
                break;
                case '2023-03':
                  this.remonth.March+=1;
                  break;
                  case '2023-04':
                  this.remonth.April+=1;
                  break;
                  case '2023-05':
                  this.remonth.May+=1;
                  break;
                  case '2023-06':
                    this.remonth.June+=1;
                    break;
                    case '2023-07':
                      this.remonth.July+=1;
                      break;
                      case '2023-08':
                        this.remonth.August+=1;
                        break;
                        case '2023-09':
                        this.remonth.September+=1;
                        break;
                        case '2023-10':
                          this.remonth.October+=1;
                          break;
                          case '2023-11':
                            this.remonth.November+=1;
                            break;
                            case '2023-12':
                            this.remonth.December+=1;
                            break;
              
             
            
           }
           console.log("test",this.remonth);
           const labels = [
            'Janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
            'août', 'septembre', 'octobre', 'novembre ', 'décembre '
          ];
      
      
          const data = {
          
       
              labels: labels,
              datasets: [{
                label: 'N° de réunion par mois ',
                data: [this.remonth.January,  this.remonth.February, this.remonth.March,  this.remonth.April,
                  this.remonth.May, this.remonth.June, this.remonth.July, this.remonth.August,this.remonth.September,
                  this.remonth.October, this.remonth.November,this.remonth.December],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            };
          var myChart = new Chart("myChart", {
            type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              
              beginAtZero: true,
              min:0,
              max:31,
              ticks: {                                                               
                stepSize: 1 // force l'echelle à une unitée
                    }
            }
          }
        } as any // Explicitly cast options to any type
          });
            
          }
        },
        err => console.log(err)
      );
     
     
    }else{
      this.router.navigate(['']);
    }
    }
  
}
