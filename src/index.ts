//import App, { getDefaultApp } from "./app";
//import DatabaseConnectionManager from "./database";
import { getConnectionOptions, createConnection, BaseEntity,ConnectionOptions } from 'typeorm'
import { People } from './entities/People'
import dbConfig from "./ormconfig";

//const APP_SECRET = process.env.APP_SECRET || "5s5seA2~JaFq'#%x}pN9iD@Sv+^bD7K,qf}9<VvwaXzyuDj@ez%xWmtr27Aikz1";
const swData = require("./data");

let app = async () => {
  const { setupExpressServer } = require("./server");
  const PORT = 3000;
  const app = setupExpressServer();
  
  // --- TypeORMの設定
  //const connectionOptions = await getConnectionOptions();
  const connection = await createConnection(dbConfig as ConnectionOptions,);
  // ActiveRecordパターンでTypeORMを使用する場合
  BaseEntity.useConnection(connection);

  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
  app.get('/initdb', async (req, res) => {
    await People.clear();
    const people = new People;
    for (let people_i of swData.people) {
      people.name = people_i.name;
      people.height = people_i.height;
      people.mass = people_i.mass;
      people.homeworld = people_i.homeworld;

      await people.save();
    }
    const allPeople = await People.find();
    res.send(allPeople);
  });
};

app();

