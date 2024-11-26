var obj = {
    id: 1,
    name: 'anil',
    salary: 1000
}
// const idValue = obj.id
// const nameValue = obj.name

// const id = obj.id
// const name = obj.name

// const { id: idValue, name: nameValue } = obj
//console.log(idValue, nameValue);

//const { id: id, name: name } = obj
const { id, name } = obj

console.log(id, name);

const numbers = [11, 22, 33, 44, 55]
// const first = numbers[0]
// const third = numbers[2]

const [first, , third] = numbers
console.log(first, third);

const managers = [
    {
        id: 1,
        name: 'anil',
        salary: 1000,
        projects: [
            {
                id: 1,
                startDate: new Date(),
                name: 'CITA',
                members: [
                    { id: 100, name: 'joydip' },
                    { id: 101, name: 'vinod' }
                ]
            },
            {
                id: 2,
                startDate: new Date(),
                name: 'SBA',
                members: [
                    {
                        id: 102, name: 'banu'
                    },
                    {
                        id: 103, name: 'murali'
                    }
                ]
            }]
    }
]

const [{ projects: [, { members: [, { name: memberName }] }] }] = managers
console.log(memberName);