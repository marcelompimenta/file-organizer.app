import fs from 'fs/promises';
import path from 'path';
const userProfile = process?.env?.USERPROFILE as string

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

  let inputsUser: ICreateFolder = createFolder('Desktop', 'File Organizer')

  await fs.readdir(path.join(userProfile, 'Downloads'))
    .then(files => {
      files.forEach(file => {
        let extension = file.split('.').pop();
        createFolder('Desktop', 'File Organizer', `${extension}`);
        if (path.extname(file) === '.' + extension) {
          fs.rename(path.join(userProfile, 'Downloads', file), path.join(userProfile, inputsUser.dir, inputsUser.url, `${extension}`, file))
        }
      })
    })

}

organizer()


