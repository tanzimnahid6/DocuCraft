import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import path from "path";
const postsDirectory = path.join(process.cwd(), "docs");

export const getDocuments = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allDocument = fileNames.map((file) => {
    const id = file.replace(".md", "");
    const fullPath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContent);
    return { id, ...matterResult.data };
  });

  return allDocument.sort((a,b)=>{
    if(a.order<b.order){
        return -1
    }else if(a.order<b.order){
      return 1
    }
  })
};

export const getDocumentContent = async (id)=>{
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
      id,
      contentHtml,
      ...matterResult.data,
  }

}
