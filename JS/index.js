const users = [
    {firstName : "Soumak" , lastName : "Dutta" , age : 26},
    {firstName : "Asmita" , lastName : "Biswas" , age : 21},
    {firstName : "Donald" , lastName : "Trump" , age : 75},
    {firstName : "Elon" , lastName : "Musk" , age : 50}
]

const output = users.reduce(function(acc,curr) {
    if(curr.age<30) {
        acc.push(curr.firstName);
    }
    return acc;
},[]);

console.log(output);