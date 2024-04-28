import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

const SubContent = ({ params: { subContentId } }) => {
  return (
    <div>
      <ContentDisplay id={subContentId}></ContentDisplay>
    </div>
  );
};

export default SubContent;
