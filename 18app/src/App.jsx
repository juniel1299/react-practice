import React, { useEffect, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './App.css';

function App() {
  const editorRef = useRef();

  useEffect(() => {
    // Toast UI 에디터 인스턴스가 준비되면 마크다운 강제로 초기화
    const editor = editorRef.current?.getInstance();
    if (editor) {
      editor.setMarkdown(''); // ✅ 초기 콘텐츠 강제 비움
    }
  }, []);

  const handleSave = () => {
    const md = editorRef.current.getInstance().getMarkdown();
    console.log(md);
  };

  return (
    <div>
      <Editor
        ref={editorRef}
        height="500px"
        initialEditType="markdown"
        previewStyle="none"
        hideModeSwitch={true}
        initialValue="불필요한 값 제거됨"  // 여기는 뭘 줘도 강제로 비워짐
      />
      <button onClick={handleSave}>저장</button>
    </div>
  );
}

export default App;