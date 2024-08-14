import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const bestStudent = Seq(grades)
    .filter(student => student.get('score') >= 70)
    .map(student => ({
      firstName:
        student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName:
        student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));
  bestStudent.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}`);
  });
}
