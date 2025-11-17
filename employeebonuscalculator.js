"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    if (!emp.name || !emp.salary || !emp.years) {
      throw new Error("Missing employee property");
    }

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) {
      throw new Error("Invalid numeric conversion");
    }

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    console.log(
      `Employee: ${emp.name}\nSalary: ${salary}\nYears: ${years}\nBonus: ${bonus}\n--------------------------`
    );
  } catch (err) {
    console.log(`Error processing record ${i}: ${err.message}`);
  }
}
