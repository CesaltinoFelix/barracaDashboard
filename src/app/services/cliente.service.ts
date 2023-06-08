import { Injectable } from '@angular/core';
import axios from 'axios'
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public baseUrl = 'http://localhost:3000';

  constructor() { }

  async cadastrarCliente(data: any): Promise<any> {
    //await console.log(file.has('file'))this.urlBaseElab+

    //  let call = await this.httpCliente.post<any>(`${baseUrl}/upload`,file)
    //await console.log(call);
    // return lastValueFrom(call);

    //}*/
    let name = data[0].name;
    let nif = data[0].nif;
    let email = data[0].email;
    let contact = data[0].contact;
    await axios.post(`${this.baseUrl}/costumers`, { name, nif, email, contact }).then(res => {

      if (res.status == 200) {
        let password = "barraca";
        let entityId = 1;
        axios.post(`${this.baseUrl}/users`, { name, password, email, entityId }).then((res) => {
          if (res.status == 200) {
            this.menssageSuccess();
          } else {
            this.menssageError();
          }
        }).catch((error) => {
          console.log(error)
        })


      }
      else {
        this.menssageError();
      }


    }).catch(error => {
      console.log(error)
    })

  }

  menssageError() {
    Swal.fire(
      'Ocorreu algum erro!',
      'contacte a equipe de suporte.',
      'error'
    )
  }

  menssageSuccess() {
    Swal.fire(
      'Entidade Registrada!',
      '',
      'success'
    )
  }



}
