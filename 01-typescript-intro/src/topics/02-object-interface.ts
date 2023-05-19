const skills: string[]=['uno', 'dos', 'tres']



interface Iperson{
    name:string;
    hp:number;
    skills:string[];
    city:string
}


const person:Iperson={
    name: "Jesus Mendoza",
    hp: 10,
    skills: ["Uno", "Dos"],
    city: "Celaya"
}


person.city = "Gdl";

console.table(person);

export{};

