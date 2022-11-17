const Employee = require('./employee');
const Manager = require('./manager');

const hobbes = new Manager("Hobbes", 1000000, "Founder");
const calvin = new Manager("calvin", 130000, "Director", hobbes);
const susie = new Manager("Susie", 100000, "TA Manager", calvin);
const clifford = new Employee("Clifford", 90000, "TA", susie);
const lily = new Employee("Lily", 90000, "TA", susie);

console.log(`Hobbes' bonus is $${hobbes.calculateBonus(0.05)}.`);
console.log(`Calvin's bonus is $${calvin.calculateBonus(0.05)}.`);
console.log(`Susie's bonus is $${susie.calculateBonus(0.05)}.`);
console.log(`Lily's bonus is $${lily.calculateBonus(0.05)}.`);
console.log(`Clifford's bonus is $${clifford.calculateBonus(0.05)}.`);
