import { Component, OnInit } from '@angular/core';
import axios from'axios'
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  public baseUrl = 'http://localhost:3000';
  dados:any
  constructor() { }

  ngOnInit(): void {
    this.showElement()
  }


  showElement()
  {
    axios.get(`${this.baseUrl}/costumers`).then((res)=>
    {
      this.dados=res.data
    })

  }

}
