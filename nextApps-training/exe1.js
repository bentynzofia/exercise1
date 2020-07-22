/*jshint esversion: 6 */

const DATA = [
  {
    firstName: "Clare",
    lastName: "Winters",
    department: "Accounting",
    iban: "IL02 4221 4105 8544 0188 471",
    salary: "$2000",
    payInsurance: false,
  },
  {
    firstName: "Fallon",
    lastName: "Gerrelts",
    department: "HelpDesk",
    iban: undefined,
    salary: "$1000",
    payInsurance: true,
  },
  {
    firstName: "Susannah",
    lastName: "Wayne",
    department: "Accounting",
    iban: "NL63 UYLP 3268 4623 54",
    salary: "$2000",
    payInsurance: false,
  },
  {
    firstName: "Monti",
    lastName: "Kenealy",
    department: "HelpDesk",
    iban: "PK42 ILYX FMEN LYAX P7SO 0BWO",
    salary: "$2000",
    payInsurance: true,
  },
  {
    firstName: "Ceil",
    lastName: "Darville",
    department: "Accounting",
    iban: "SA58 90HH 0HQ4 GQPM XGML VXNN",
    salary: "$4000",
    payInsurance: true,
  },
  {
    firstName: "Griffy",
    lastName: "Bothie",
    department: "Accounting",
    iban: "MC63 3524 4277 39TK VHB9 VLF0 R87",
    salary: "$2000",
    payInsurance: true,
  },
  {
    firstName: "Woodie",
    lastName: "Petz",
    department: "HR",
    iban: null,
    salary: "$3000",
    payInsurance: false,
  },
  {
    firstName: "Sadye",
    lastName: "Wigin",
    department: "HelpDesk",
    iban: "MK59 959R LSNZ 5R4C F98",
    salary: "$1000",
    payInsurance: true,
  },
  {
    firstName: "Roslyn",
    lastName: "Gravie",
    department: "Accounting",
    iban: "GR70 8120 7965 KAV6 PSPE P49P EJV",
    salary: "$1000",
    payInsurance: false,
  },
  {
    firstName: "Querida",
    lastName: "Church",
    department: "HelpDesk",
    iban: "MT66 SOXU 4570 7DBU LZ8S A3UY IFAV 6QX",
    salary: "$4000",
    payInsurance: false,
  },
];

const INSURANCE_COST = 200;

class User {
  constructor(firstName, lastName, department, iban, salary, payInsurance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.iban = iban;
    this.salary = salary;
    this.payInsurance = payInsurance;
  }

  departmentChange(newDepartment) {
    this.department = newDepartment;
  }
}
const Users = DATA.map(
  (x) =>
    new User(
      x.firstName,
      x.lastName,
      x.department,
      x.iban,
      x.salary,
      x.payInsurance
    )
);

const findIndexByName = (object, firstName, lastName) => {
  return object.findIndex(
    (object) => object.firstName == firstName && object.lastName == lastName
  );
};

//1.a
Users[findIndexByName(DATA, "Griffy", "Bothie")].departmentChange("HR");

//1.b
Users.splice(findIndexByName(DATA, "Monti", "Kenealy"), 1);

//1.c
Users.push(new User("Zosia", "Bentyn", "HR", null, "$200", false));

//1.d
const Groups = Users.reduce((groups, item) => {
  const department = groups[item.department] || [];
  department.push(item);
  groups[item.department] = department;
  return groups;
}, {});

//1.e
const UsersWithoutIban = Users.filter((x) => !x.iban);

//2.a
const insuranceSum = (object) => {
  const insuranceCount = object.filter((x) => x.payInsurance);
  return INSURANCE_COST * insuranceCount.length;
};

//2.b
const Departments = Users.map((x) => x.department);
let uniqueDepartments = [...new Set(Departments)];

const hasInsurance = (Users.filter((x) => x.payInsurance));

const usersWithInsuranceByDepartment = hasInsurance.reduce((groups, user) => {
  let pays =  0;
  const department = groups[user.department] || [];
  if(user.payInsurance){
    pays+=INSURANCE_COST;
  }
  department.push(pays);
  groups[user.department] = department;
  return groups;
}, {});


console.log(usersWithInsuranceByDepartment);