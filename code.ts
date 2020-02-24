interface Student {
  id: number;
  name: string;
}

function logStd(student: Student) {
  console.log(`${student.id}:${student.name}`);
}

console.log({ id: 7, name: "ahmed" });
