export class ClienteModel {

    private name: string;
    private email: string;
    private contact: string;
    private nif: string;
    private clientes: any
    constructor() {
        this.name = "";
        this.email = "";
        this.contact = "";
        this.nif = "";
    }


    setName(name: any) {
        this.name = name;
    }
    getName() {
        return this.name;

    }
    setEmail(email: any) {
        this.email = email;
    }
    getEmail() {
        return this.email;

    }
    setContact(contact: any) {
        this.contact = contact;
    }
    getContact() {
        return this.contact;

    }
    setNif(nif: any) {
        this.nif = nif;
    }
    getNif() {
        return this.nif;

    }






}
