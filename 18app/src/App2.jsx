import React, { useRef } from 'react';
import TuiEditor from './components/TuiEditor';

function App2() {
  const editorRef = useRef();

  const handleSave = () => {
    const content = editorRef.current?.getInstance()?.getMarkdown();
    console.log(content);
  };

  return (
    <div>
      <TuiEditor
        ref={editorRef}
        height="500px"
        initialEditType="markdown"
        previewStyle="none"
        hideModeSwitch={true}
        initialValue=""
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'link', 'image'],  // ✅ 이미지 버튼
          ['code', 'codeblock'],
        ]}
      />
      <button onClick={handleSave}>저장</button>
    </div>
  );
}

export default App2;