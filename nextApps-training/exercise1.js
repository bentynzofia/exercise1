/*jshint esversion: 6 */
//sensowne nazwy funkcji
//const na funkcjach
//unikać duplikatów
//obiekt+metody
//uzywać eslinta
//użwać prettier
//klasa na każdego użytkownika
//gettery i settery w js
//klamry
//zamiast forów ES6 jakiś
//jakieś dziwne metody zamiast tych cholernych nawyków z zsk XD
// 1
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

// Add your code below this line


//1.a
const departmentChange = (object, firstName, lastName, departmentName) => {
  let employeeId = object.findIndex(
    (employee) =>
      employee.firstName === firstName && employee.lastName === lastName
  );
  object[employeeId].department = departmentName;
};
departmentChange(DATA, "Griffy", "Bothie", "HR");

//1.b
const deleteEmployee = (object, firstName, lastName) => {
  let employeeId = object.findIndex(
    (employee) =>
      employee.firstName === firstName && employee.lastName === lastName
  );
  object.splice(employeeId, 1);
};
deleteEmployee(DATA, "Monti", "Kenealy");

//1.c
const addEmployee = (
  object,
  fullName,
  department,
  iban,
  salary,
  payInsurance
) => {
  class Employee {
    constructor(fullName, department, iban, salary, payInsurance) {
      this.firstName = fullName.split(" ").slice(0, -1).join(" ");
      this.lastName = fullName.split(" ").slice(-1).join(" ");
      this.department = department;
      this.iban = iban;
      this.salary = salary;
      this.payInsurance = payInsurance;
    }
  }
  let newEmployee = new Employee(
    fullName,
    department,
    iban,
    salary,
    payInsurance
  );
  object.push(newEmployee);
};
addEmployee(
  DATA,
  "Zosia Bentyn",
  "HelpMeDesk",
  "GR80 1230 7565 VFV6 PWEE P45P AJV",
  "$400000",
  false
);

//1.d
const groupByDepartments = (object, objectKey) => {
  const map = new Map();
  object.forEach((user) => {
    const key = objectKey(user);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [user]);
    } else {
      collection.push(user);
    }
  });
  return map;
};
groupByDepartments(DATA, (employee) => employee.department);

//1.e
const employeesWithoutIban = (object) => {
  let employeeWithoutIban = [];
  for (let user in object) {
    if (!object[user].iban) {
      employeeWithoutIban.push(object[user]);
    }
  }
  return employeeWithoutIban;
};
employeesWithoutIban(DATA);

//2.a
const sumOfInsurance = (object) => {
  let insuranceSum = 0;
  for (let user in object) {
    if (object[user].payInsurance === true) insuranceSum += INSURANCE_COST;
  }
  return insuranceSum;
};
sumOfInsurance(DATA);

//2.b
const insuranceSumByDepartment = (object) => {
  let grouped = groupByDepartments(object, (employee) => employee.department);
  let groupedKeys = Array.from(grouped.keys());
  let departments = [];

  groupedKeys.forEach((department) => {
    let insuranceValue = 0;
    object.forEach((user) => {
      if (department === user.department && user.payInsurance == true) {
        insuranceValue += INSURANCE_COST;
      }
    });
    departments.push([department, insuranceValue]);
  });

  return departments;
};
insuranceSumByDepartment(DATA);

//2.c
let reducedSalaries = [];
const saleryDecreasedByInsurance = (object, insurance) => {
  object.forEach((user) => {
    let salary = user.salary.slice(1);
    Number(salary);
    if (user.payInsurance == true) {
      reducedSalaries.push([user.firstName, user.lastName, salary - insurance]);
    }
  });
  return reducedSalaries;
};
saleryDecreasedByInsurance(DATA, INSURANCE_COST);

//2.d
const sumOfSalariesDecreasedByInsurance = (object) => {
  let salariesSum = 0;
  object.forEach((user) => {
    user.forEach((value) => {
      if (typeof value === "number") {
        salariesSum += value;
      }
    });
  });
  return salariesSum;
};
sumOfSalariesDecreasedByInsurance(reducedSalaries);

//3.a
const highestSalaryUsers = (object) => {
  let grouped = groupByDepartments(object, (employee) => employee.department);
  let groupedKeys = Array.from(grouped.keys());
  let departments = [];

  groupedKeys.forEach((department) => {
    let highestSalary = 0;
    object.forEach((user) => {
      if (
        department === user.department &&
        Number(user.salary.slice(1)) > highestSalary
      ) {
        highestSalary = Number(user.salary.slice(1));
      }
    });
    departments.push([department, highestSalary]);
  });

  departments.sort((a, b) => (a[1] > b[1] ? -1 : 1));

  return departments;
};
highestSalaryUsers(DATA);
