import Customer from "./Customer"

class Branch {
    private Name : string
    private customer: Customer[]
    constructor(name: string){
        this.Name = name
        this.customer = []
    }

    getName(){
        return this.Name
    }
    getCustomers(){
       return  this.customer
    }
    addCustomer(name: Customer): boolean{
        if(!this.customer.includes(name)){
            this.customer.push(name)
            return true
        }else return false
    }

    addCustomerTransaction(customerId: string, amount: number): boolean {
        const customer = this.customer.find(c => c.getId() === customerId);
        if (customer) {
          return customer.addTransaction(amount);
        } else {
          return false;
        }
      }

      findCustomer(customerId: string): Customer | null{
        const customer = this.customer.find(c => c.getId() === customerId)
        if(customer){
            return customer
        } else return null
      }
}

export default Branch