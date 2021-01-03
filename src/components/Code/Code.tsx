import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export interface propsModel {
  children: any,
  language: string | any
}

const Code = (props: propsModel) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${props.language}`}>
          {props.children}
        </code>
      </pre>
    </div>
  );
}

export default Code
