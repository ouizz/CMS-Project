'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push('/dashboard');
    return;

    if (!email || !password) {
      setError('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    if (email === 'user@example.com' && password === 'password123') {
      router.push('/dashboard');
    } else {
      setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="login-container">
      <h1>เข้าสู่ระบบ</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">อีเมล</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </div>
        <div>
          <label htmlFor="password">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </div>
        <button type="submit">กด เพื่อ เข้าสู่ระบบ</button>
      </form>
    </div>
  );
};

export default Home;
