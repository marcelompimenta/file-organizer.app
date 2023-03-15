import fs from 'fs/promises';
import path from 'path';
const userProfile = process?.env?.USERPROFILE as string
const directory = 'Documents' // local atual dos arquivos
const newDirectory = 'Files of Documents' // nome da pasta a ser criada
const rootDir = 'Desktop' // caminho principal onde sera criada a nova pasta

/*
* executar programa com yarn dev 
*/
interface ICreateFolder {
  dir: string
  url: string
  nameDir?: string
}

function createFolder(dir: string, url: string, nameDir?: string): ICreateFolder {
  fs.mkdir(path.join(userProfile, `${dir}`, `${url}`, `${nameDir}`), { recursive: true })
  return { dir, url }
}

async function organizer() {

  let inputsUser: ICreateFolder = createFolder(rootDir, newDirectory)

  await fs.readdir(path.join(userProfile, directory))
    .then(files => {

      files.forEach(file => {
        let extension = file.split('.').pop();

        createFolder(rootDir, newDirectory, `${extension}`);

        if (path.extname(file) === '.' + extension) {
          fs.rename(path.join(userProfile, directory, file),
            path.join(userProfile, inputsUser.dir, inputsUser.url, `${extension}`, file))
        }

      })

    })
}

organizer()


