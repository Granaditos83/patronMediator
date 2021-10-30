

function Aviones(name)
{
  this.name = name
  this.chatroom = null
}

Aviones.prototype = {
  send: function(message, toMember)
  {
    this.chatroom.send(message, this, toMember)
  },
  receive: function(message, fromMember)
  {
    document.write(`${" " +fromMember.name+ " "} Mensaje para ${" "+this.name}: ${message}`)
  }
}

function torreDeControl()
{
  this.members = {}
}

torreDeControl.prototype = {
  addMember: function(member)
  {
    this.members[member.name] = member
    member.chatroom = this
  },
  send: function(message, fromMember, toMember)
  {
    toMember.receive(message, fromMember)
  }
}

const chat = new torreDeControl()

const Cesna = new Aviones("Cesna")
const Boeing747 = new Aviones("Boeing747")
const Airbus330 = new Aviones("Airbus330")

chat.addMember(Cesna)
chat.addMember(Boeing747)
chat.addMember(Airbus330)

Cesna.send("soy el avion Cesna soy uno de los mas pequeños", Airbus330);
Cesna.send("hola Boeing747 soy tu amiga la avioneta" , Boeing747);
Boeing747.send("hola Cesna soy un avion muy grande", Cesna);
Airbus330.send("Hola a todos soy el 330", Cesna);


    

    

