import React, { useState } from 'react';

const currentLocale = 'ko';

const MultiLangModal = ({ visible, onClose, onSave, initialValues }) => {
  const [values, setValues] = useState(initialValues);

  React.useEffect(() => {
    setValues(initialValues); // 열릴 때마다 초기화
  }, [initialValues]);

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
          Korean: <input value={values.ko} onChange={(e) => handleChange('ko', e.target.value)} />
        </label>
        <label>
          English: <input value={values.en} onChange={(e) => handleChange('en', e.target.value)} />
        </label>
        <label>
          Chinese: <input value={values.zh} onChange={(e) => handleChange('zh', e.target.value)} />
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

const MultilangInput = ({ id, valueMap = { ko: '', en: '', zh: '' }, onClickPop }) => {
  return (
    <input
      id={id}
      readOnly
      value={valueMap[currentLocale]}
      onClick={() => onClickPop(id, valueMap)}
      style={{ display: 'block', marginBottom: '10px' }}
    />
  );
};

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentInputId, setCurrentInputId] = useState(null);
  const [tempValues, setTempValues] = useState({ ko: '', en: '', zh: '' });
  const [langValuesMap, setLangValuesMap] = useState({});

  const onClickPop = (id, valueMap) => {
    setCurrentInputId(id);
    setTempValues(valueMap);
    setModalVisible(true);
  };

  const handleSave = (newValues) => {
    setLangValuesMap((prev) => ({
      ...prev,
      [currentInputId]: newValues,
    }));
  };

  return (
    <div>
      <MultilangInput id="title" valueMap={langValuesMap.title} onClickPop={onClickPop} />
      <MultilangInput id="description" valueMap={langValuesMap.description} onClickPop={onClickPop} />
      <MultilangInput id="note" valueMap={langValuesMap.note} onClickPop={onClickPop} />

      <MultiLangModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
        initialValues={tempValues}
      />
    </div>
  );
}