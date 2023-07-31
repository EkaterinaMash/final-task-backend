import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';


(async () => {
  try {
    await mongoose.connect('mongodb+srv://ekaterina:nwu3VmN9pjbnl04S@cluster0.hthemi3.mongodb.net/managerApp');
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log(process.env.PORT || PORT);
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
