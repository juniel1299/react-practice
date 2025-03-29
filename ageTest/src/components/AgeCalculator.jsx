import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [ages, setAges] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setBirthDate(value);

    if (value.length === 10) {
      const [year, month, day] = value.split('-').map(Number);
      const today = new Date();
      const birth = new Date(year, month - 1, day);

      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDate = today.getDate();

      // ✅ 만나이
      let internationalAge = currentYear - year;
      if (
        currentMonth < month ||
        (currentMonth === month && currentDate < day)
      ) {
        internationalAge--;
      }

      // ✅ 연나이
      const yearAge = currentYear - year;

      // ✅ 한국나이
      const koreanAge = currentYear - year + 1;

      setAges({
        koreanAge,
        internationalAge,
        yearAge,
      });
    } else {
      setAges(null);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold">나이 계산기</h2>
      <div>
        <label htmlFor="birthdate" className="block mb-1">생년월일</label>
        <input
          id="birthdate"
          type="date"
          value={birthDate}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      {ages && (
        <div className="space-y-1 mt-4">
          <div>👴 한국 나이: <strong>{ages.koreanAge}세</strong></div>
          <div>🧑 만나이: <strong>{ages.internationalAge}세</strong></div>
          <div>📆 연 나이: <strong>{ages.yearAge}세</strong></div>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;