//al set el puedes pasar lo que se pero a este solo le puedes pasr objetos

const ws=new WeakSet();

const cliente={
    id:1,
    nombre:'Jhafet'
}

ws.add(cliente);

console.log(ws);

console.log(ws.has('cliente'));