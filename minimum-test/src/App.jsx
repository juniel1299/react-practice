import React, { useState } from 'react';

const currentLocale = 'ko'; // 실제로는 context나 i18n에서 받아야 함

const MultiLangModal = ({ visible, onClose, onSave, initialValues }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (lang, val) => {
    setValues((prev) => ({ ...prev, [lang]: val }));
  };

  const handleSave = () => {
    onSave(values);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <label>
          Korean:
          <input value={values.ko} onChange={(e) => handleChange('ko', e.target.value)} />
        </label>
        <label>
          English:
          <input value={values.en} onChange={(e) => handleChange('en', e.target.value)} />
        </label>
        <label>
          Chinese:
          <input value={values.zh} onChange={(e) => handleChange('zh', e.target.value)} />
        </label>
        <button onClick={handleSave}>저장 및 닫기</button>
        <button onClick={onClose}>취소</button>
      </div>
      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 1rem;
          border-radius: 10px;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentInputId, setCurrentInputId] = useState(null);
  const [langValuesMap, setLangValuesMap] = useState({});

  const openModal = (inputId) => {
    setCurrentInputId(inputId);
    const values = langValuesMap[inputId] || { ko: '', en: '', zh: '' };
    setTempValues(values);
    setModalVisible(true);
  };

  const [tempValues, setTempValues] = useState({ ko: '', en: '', zh: '' });

  const handleSave = (newValues) => {
    setLangValuesMap((prev) => ({
      ...prev,
      [currentInputId]: newValues,
    }));

    const targetInput = document.getElementById(currentInputId);
    if (targetInput) {
      targetInput.value = newValues[currentLocale];
    }
  };

  const handleClick = (e) => {
    const target = e.target;
    if (target.tagName === 'INPUT' && target.dataset.multilang === 'true') {
      openModal(target.id);
    }
  };

  return (
    <div onClick={handleClick}>
      {/* readOnly input들 (몇 개일지 모름) */}
      <input id="title" data-multilang="true" readOnly placeholder="Click to edit" />
      <input id="description" data-multilang="true" readOnly placeholder="Click to edit" />
      <input id="memo" data-multilang="true" readOnly placeholder="Click to edit" />

      <MultiLangModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
        initialValues={tempValues}
      />
    </div>
  );
}