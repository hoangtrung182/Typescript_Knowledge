import { Invoice, Payment } from "./classImpleInterface";
import { hasPrint } from "./interfaceForClass";


const documentOne: hasPrint = new Invoice('ABC Group', 'Buon Ban', 510000)
const documentTwo: hasPrint = new Payment('Thang Cho', 'Nhat La', 10000)

const allDocuments: hasPrint[] = []

allDocuments.push(documentOne)
allDocuments.push(documentTwo)

console.log(allDocuments)