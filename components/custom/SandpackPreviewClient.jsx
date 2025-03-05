import { ActionContext } from "@/context/ActionContext";
import { SandpackPreview, useSandpack } from "@codesandbox/sandpack-react";
import React, { useContext, useEffect, useRef } from "react";

function SandpackPreviewClient() {
  const previewRef = useRef(null);
  const { sandpack } = useSandpack();
  const { action, setAction } = useContext(ActionContext);

  useEffect(() => {
    GetSandpackClient();
  }, [sandpack && action]);

  const GetSandpackClient = async () => {
    const client = previewRef.current?.getClient();
    if (client) {
      console.log(client);
      const result = await client.getCodeSandboxURL();
      if (action?.actionType === "deploy") {
        // Create an anchor element to simulate a direct click
        const url = "https://" + result?.sandboxId + ".csb.app";
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.target = "_blank";
        // Append it, trigger click, then remove it
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      } else if (action?.actionType == "export") {
        window?.open(result?.editorUrl, "_blank");
      }
    }
  };

  return (
    <SandpackPreview
      ref={previewRef}
      style={{ height: "80vh" }}
      showNavigator={true}
    />
  );
}

export default SandpackPreviewClient;
