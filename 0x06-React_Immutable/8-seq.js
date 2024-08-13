const { Seq, Map } = require('immutable');

export function printBestStudents(grades) {
    const gradesMap = Map(grades)
    const bestStudent = Seq(gradesMap)
    .filter(student => student.get('score') >= 70)
    .map(student => ({
        firstName: capitalize(student.get('firstName')),
        lastName: capitalize(student.get('lastName'))
    }));
    bestStudent.forEach(student => {
       console.log(`${student.firstName} ${student.lastName}`); 
    });

    
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
