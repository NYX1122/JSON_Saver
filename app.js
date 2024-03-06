import fs from 'fs/promises';

import directoryChecker from 'directory_checker';

export default async function (filename, data) {
  const saveDir = './jsonFiles';
  const directoryExists = await directoryChecker(saveDir);

  if (!directoryExists) {
    await fs.mkdir(saveDir);
  }

  const appendedDir = `${saveDir}/${filename}.json`;
  await fs.writeFile(appendedDir, JSON.stringify(data, null, 2));
  console.log('JSON_Saver successfully saved file:');
  console.log(appendedDir);
}
