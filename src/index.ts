
import { getConnectionOptions, createConnection, BaseEntity,ConnectionOptions } from 'typeorm'
import { People } from './entities/People'
import dbConfig from "./ormconfig";



let app = async () => {
  const { setupExpressServer } = require("./server");
  const swData = require("./data/people.json");
  const PORT = 3000;
  const app = setupExpressServer();
  
  // --- TypeORMの設定
  const connection = await createConnection(dbConfig as ConnectionOptions,);
  // ActiveRecordパターンでTypeORMを使用する場合
  BaseEntity.useConnection(connection);

  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
  
  app.get("/api/people", async (req, res) => {
    const allPeople = await People.find();
    res.json(allPeople);
  });
  app.get("/api/people/name", async (req, res) => {
    const allPeople = await People.find();
    const list = new Array;
    allPeople.forEach((people) => list.push(people.name));
    res.json(list);
  });

  app.patch("/api/people/", async (req, res) => {
    const allPeople = await People.find();
    res.json(allPeople);
  });

  
  app.post('/api/initdb', async (req, res) => {
    await People.clear();
    const people = new People;
    
    for (let people_i of swData) {

      people.name = people_i.name;
      people.height = people_i.height;
      people.mass = people_i.mass;
      people.homeworld = people_i.homeworld;
      //同一IDを更新しないように0を指定
      people.id = 0;
      await people.save();
      
      
    }
    const allPeople = await People.find();
    res.status(201).send(allPeople);
  });
  
  app.post("/api/people", async (req, res) => {
    const newpeople = req.body;
    const people = new People;
    if (!newpeople.name || !newpeople.height || !newpeople.mass) {
      res.status(460).send("Invalid Data");
    } else {
      people.name = newpeople.name;
      people.height = newpeople.height;
      people.mass = newpeople.mass;
      people.homeworld = newpeople.homeworld;
      await people.save();
      res.status(201).json(people);
    }
  });




  
};

app();

