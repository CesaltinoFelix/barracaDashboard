import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

   
  constructor(

   private httpCliente:ClienteService
  ) { }

  ngOnInit(): void {


  }

  cadastrarCliente()
  {
    var nome =<HTMLInputElement> document.getElementById('nome');
    var nif =<HTMLInputElement> document.getElementById('nif');
    var email =<HTMLInputElement> document.getElementById('email');
    var tel =<HTMLInputElement> document.getElementById('tel');


    if(nome.value==null || nif.value==null || email.value==null || tel.value==null ||nome.value=='' || nif.value=='' || email.value=='' || tel.value=='')
    {
      Swal.fire(
        'Por favor preencha todos os campos!',
        '',
        'error'
    )
    }
    else
    {
      var data = [
        {
          "name":nome.value,
          "nif":nif.value,
          "email":email.value,
          "contact":tel.value
  
        }]
  
      
  
     this.httpCliente.cadastrarCliente(data);

    }
   

  }


}
