import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cliente:any
  vendas:any
  price:any
  public baseUrl = 'http://localhost:3000';
  constructor() { }

  ngOnInit(): void {
    
    this.showElement()

  }

  showElement()
  {

    setInterval(()=>
    {
      console.log('teste')

      axios.get('http://localhost:3000/costumers').then((res)=>
      {
        console.log(res)
        this.cliente=res.data.length;
  
      })

      this.price = 0;
      var soma=0;
      axios.get(`http://localhost:3000/sales`).then((res)=>
      {
        this.vendas=res.data.length;

        res.data.forEach( (data: any)=> {
          soma = parseFloat(data['price']);
          this.price=soma + parseFloat(this.price);
        });
      
      })


    },1500)

  

  }

}
