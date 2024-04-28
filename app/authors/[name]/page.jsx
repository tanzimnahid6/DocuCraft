import React from "react";
import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";
const AuthorsPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByAuthor(docs, name);
  return (
    <div>
      {" "}
      <ContentDisplay id={matchedDocuments[0].id}></ContentDisplay>
    </div>
  );
};

export default AuthorsPage;
