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
      if (action?.actionType == "deploy") {
        window.open("https://" + result?.sandboxId + ".csb.app/", "_blank");
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
