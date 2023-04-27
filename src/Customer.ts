import Transaction from "./Transaction";

class Customer {
    private Name: string
    private Id: string
    tracnsactions: Transaction[]

    constructor(name: string){
        this.Name = name
        this.tracnsactions = []
        this.Id = this.generateId()
    }
    private generateId(): string {
        return Math.random().toString(32).substr(2,9);
    }
    getName() {
        return this.Name
    }
    getId(){
        return this.Id
    }
    getTransactions(){
       return this.tracnsactions
    }
    getBalance(): number {
        let balance = 0;
        for (const transaction of this.tracnsactions) {
          balance += transaction.amount;
        }
        return balance;
      } 

    addTransaction(amount: number,): boolean {
        const balance =this.getBalance() + amount
        if(balance >= 0) {
            const transaction = {amount, date: new Date()}
            this.tracnsactions.push(transaction)
            return true
        }else return false
    }

}



export default Customer