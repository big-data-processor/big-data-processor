const path = require('path'),
  taskIndexPath = path.join(process.env.PACKAGE_FOLDER, 'task-index.yaml'),
  taskConfigPath = path.join(process.env.PACKAGE_FOLDER, 'configs/package-config.json');
require("@big-data-processor/task-reader")
  .execute(taskIndexPath, taskConfigPath)
  .catch(e => {console.log('==>'); console.log(e); process.exit(1);})
  .then(() => {console.log('Adapter Process End'); process.exit(0);});