import MicroGear from 'microgear';

const APPID  = 'HydroFarm';
const KEY    = 'oGZimVMi9hpqfaq';
const SECRET = 'EMOd6HXk1I6vBN89pNyBZEMwG';

const microgear = MicroGear.create({
  key : KEY,
  secret : SECRET
});

let lampStatus = '';

console.log('Node NETPIE Demo');
console.log('------------------------');

microgear.on('connected', function() {
  console.log('Connected...');
  microgear.setAlias("NodeController");
  microgear.subscribe("/farm/led");
});

microgear.on('message', function(topic,body) {
  if (lampStatus !== body) {
    lampStatus = body;
    console.log(`LED current state: ${lampStatus}`);
  }
});

microgear.connect(APPID);
