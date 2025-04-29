import React, { useRef, useEffect, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './App.css';

function App() {
  const editorRef = useRef();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (editorRef.current && !ready) {
      const editor = editorRef.current.getInstance();
      // ✅ 초기에 강제로 비우기
      editor.setMarkdown('');
      setReady(true);
    }
  }, [ready]);

  return (
    <Editor
      ref={editorRef}
      height="500px"
      initialEditType="markdown"
      previewStyle="none"         // ✅ 미리보기 없애기
      hideModeSwitch={true}      // ✅ 하단 탭 제거
      initialValue="불필요한 값 제거됨"
    />
  );
}

export default App;