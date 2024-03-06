import fs from 'fs/promises';

export default async function (filename, data) {
  const saveDir = './jsonFiles';
  await fs.mkdir(saveDir, { recursive: true }).catch(console.error);

  const appendedDir = `${saveDir}/${filename}.json`;
  await fs.writeFile(appendedDir, JSON.stringify(data, null, 2));
  console.log('JSON_Saver successfully saved file:');
  console.log(appendedDir);
}
