// components/TuiEditor.jsx
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import ToastuiEditor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const TuiEditor = forwardRef((props, ref) => {
  const divRef = useRef(null);
  const editorRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getInstance: () => editorRef.current,
  }));

  useEffect(() => {
    if (divRef.current) {
      editorRef.current = new ToastuiEditor({
        el: divRef.current,
        ...props,
        usageStatistics: false,
        events: getInitEvents(props),
        hooks: {
          addImageBlobHook: async (blob, callback) => {
            // ✅ 이미지 업로드 요청
            const formData = new FormData();
            formData.append('image', blob);

            try {
              const response = await fetch('/api/upload-image', {
                method: 'POST',
                body: formData,
              });

              const result = await response.json();
              callback(result.url, '업로드된 이미지');
            } catch (error) {
              console.error('이미지 업로드 실패:', error);
              callback('', '업로드 실패');
            }
          },
        },
      });
      editorRef.current.setMarkdown('');
    }
  }, []);

  useEffect(() => {
    if (props.height) {
      editorRef.current?.setHeight(props.height);
    }
    if (props.previewStyle) {
      editorRef.current?.changePreviewStyle(props.previewStyle);
    }
    if (editorRef.current) {
      bindEventHandlers(editorRef.current, props);
    }
  }, [props]);

  return <div ref={divRef}></div>;
});

function getBindingEventNames(props) {
  return Object.keys(props).filter((key) => /^on[A-Z]/.test(key) && props[key]);
}

function bindEventHandlers(editor, props) {
  getBindingEventNames(props).forEach((key) => {
    const eventName = key[2].toLowerCase() + key.slice(3);
    editor.off(eventName);
    editor.on(eventName, props[key]);
  });
}

function getInitEvents(props) {
  return getBindingEventNames(props).reduce((acc, key) => {
    const eventName = key[2].toLowerCase() + key.slice(3);
    acc[eventName] = props[key];
    return acc;
  }, {});
}

export default TuiEditor;