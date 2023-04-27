import Branch from "./Branch";
import Customer from "./Customer";


class Bank {
    private Name: string
    private branches: Branch[]
    constructor(name: string) {
        this.Name = name
        this.branches = []
    }

    addBranch (branch: Branch) {
        if(!this.branches.includes(branch)){
            this.branches.push(branch)
            return true
        } else {
            return false
        }
    }
    addCustomer(branch: Branch, customer: Customer): boolean{
       const branchExists = this.branches.includes(branch)
       const customerexist = branch.getCustomers().includes(customer)
       if(branchExists && !customerexist){
        branch.addCustomer(customer)
        return true
       }else return false
    }

    addCustomerTransaction(branch: Branch, customerid: string, amount: number): boolean {
        const customerexist = branch.findCustomer(customerid)
        if(customerexist){
            return customerexist.addTransaction(amount)
            return true
        } else return false
        
    }

    findBranchByName(name: string):Branch[] | null{
        const existsname = this.branches.filter(branch => branch.getName() == name)
        if (existsname.length >0) {
            return existsname
        } else
        return null
    }

    checkBranch(branch: Branch): boolean {
        return this.branches.includes(branch)
    }

    listCustomers(branch: Branch, showTransactions: boolean): boolean {
        const branchExists = this.branches.includes(branch);
        if (branchExists) {
          console.log(`Customer details for branch ${branch.getName()}:`);
          const customers = branch.getCustomers();
          for (const customer of customers) {
            console.log(`Customer: ${customer.getName()} [${customer.getId()}]`);
            if (showTransactions) {
              const transactions = customer.getTransactions();
              console.log("Transactions:");
              for (const transaction of transactions) {
                console.log(
                  `[${transaction.date.toLocaleDateString()}] ${transaction.amount}`
                );
              }
            }
          }
          return true;
        } else {
          return false;
        }
      }
}

export default Bank