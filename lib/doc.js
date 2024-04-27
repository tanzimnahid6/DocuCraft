import fs from "fs";
import path from "path";
const postsDirectory = path.join(process.cwd(),"docs");

export const getDocuments = () => {
  console.log({postsDirectory});
};
