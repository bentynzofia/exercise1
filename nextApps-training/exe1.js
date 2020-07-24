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
const users = DATA.map(
  (employee) =>
    new User(
      employee.firstName,
      employee.lastName,
      employee.department,
      employee.iban,
      employee.salary,
      employee.payInsurance
    )
);
//w jednej linijce
const findIndexByName = (users, firstName, lastName) => {
  return users.findIndex(
    (users) => users.firstName == firstName && users.lastName == lastName
  );
};

//1.a
let index = findIndexByName(DATA, "Griffy", "Bothie");
Users[index].departmentChange("HR");

//1.b
const deleteUser = (users) => {
  let index = findIndexByName(users, firstName, lastName);
  users.splice(index, 1);
};
//1.c
const addUser = (
  users,
  firstName,
  lastName,
  department,
  iban,
  salary,
  payInsurance
) => {
  users.push(
    new User(firstName, lastName, department, iban, salary, payInsurance)
  );
};
//1.d
const groups = Users.reduce((groups, user) => {
  const department = groups[user.department] || [];
  const temp = [...department, user];
  groups[user.department] = temp;
  return groups;
}, {});

//1.e
const usersWithoutIban = Users.filter((user) => !user.iban);

//2.a
const insuranceSum = (users) => {
  const insuranceCount = users.filter((user) => user.payInsurance);
  return INSURANCE_COST * insuranceCount.length;
};

//2.b
const departments = Users.map((user) => user.department);
const uniqueDepartments = [...new Set(Departments)];

const usersWithInsurance = Users.filter((user) => user.payInsurance);

const usersWithInsuranceByDepartment = usersWithInsurance.reduce(
  (map, user) => ({
    ...map,
    [user.department]: (map[user.department] || 0) + INSURANCE_COST,
  }),
  {}
);

console.log(Groups);
