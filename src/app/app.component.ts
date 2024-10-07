import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  table:boolean = false;
  valorx:string="2.5";
  iteraciones:string="";
  valores:any[]=[];
  valorDataAlmacen:any[]=[];
  result:any;
  title = 'metodos_numericos';
  ngOnInit() {   
  }
  calcular(){
    let datos = {};
    for (let i = 0; i < parseInt(this.iteraciones); i++) {
      let iterate = i+1
      if(i === 0){
        this.result = Math.abs(Math.pow((2*(parseFloat(this.valorx))+2),1/3))
        datos = {
          iteracion:iterate,
          x:this.valorx,
          resultado:this.result,
          error:0
        }
      }else{
        let valuex = parseFloat(this.result)
        this.result = Math.abs(Math.pow((2*(valuex)+2),1/3))
        this.valorDataAlmacen.push(valuex);
        datos = {
        iteracion:iterate,
        x:valuex,
        resultado:this.result,
        error:i==1? Math.abs(valuex-parseFloat(this.valorx)):Math.abs(valuex-this.valorDataAlmacen[i-2])
      }
    }
      this.valores.push(datos)
    }
    this.table= true;
  }
}
