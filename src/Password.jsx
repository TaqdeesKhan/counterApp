import React, { useCallback, useRef, useState } from 'react';

const Password = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeChar, setIncludeChar] = useState(true);
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumber) str += '0123456789';
    if (includeChar) str += '!@#$%^&*()_+[]{}~`<>?';
    let pass = '';
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setCopied(false);
  }, [length, includeNumber, includeChar]);

  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }, [password]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at top, #0f0f10, #0a0a0f)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(40, 40, 60, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '2rem',
        width: '100%',
        maxWidth: '450px',
        boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '1.8rem',
          marginBottom: '1.5rem',
          color: '#b388ff',
          textShadow: '0 0 8px rgba(179,136,255,0.6)'
        }}>
        Password Generator
        </h2>

        <div style={{
          display: 'flex',
          marginBottom: '1.5rem',
          background: '#1c1c2e',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #6c5ce7',
          boxShadow: '0 0 10px rgba(108,92,231,0.5)'
        }}>
          <input
            type="text"
            ref={passwordRef}
            value={password}
            readOnly
            placeholder="Click Generate"
            style={{
              flex: 1,
              padding: '0.9rem',
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button
            onClick={copyToClipboard}
            style={{
              background: copied ? '#27ae60' : '#6c5ce7',
              padding: '0 1.2rem',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              boxShadow: copied
                ? '0 0 10px #27ae60'
                : '0 0 12px rgba(108,92,231,0.7)',
              transition: 'all 0.3s ease'
            }}
          >
            {copied ? '✔' : 'Copy'}
          </button>
        </div>

        <div style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Length: <strong>{length}</strong>
          </label>
          <input
            type="range"
            min="8"
            max="100"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            style={{
              width: '100%',
              accentColor: '#6c5ce7'
            }}
          />
        </div>

        <div style={{
          marginBottom: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={includeNumber}
              onChange={() => setIncludeNumber(prev => !prev)}
              style={{ accentColor: '#00cec9' }}
            />
            Include Numbers
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={includeChar}
              onChange={() => setIncludeChar(prev => !prev)}
              style={{ accentColor: '#ff7675' }}
            />
            Include Special Characters
          </label>
        </div>

        <button
          onClick={generatePassword}
          style={{
            width: '100%',
            padding: '0.85rem',
            border: 'none',
            borderRadius: '12px',
            background: 'linear-gradient(to right, #6c5ce7, #8e44ad)',
            color: '#fff',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(155, 89, 182, 0.6)',
            transition: 'transform 0.2s ease-in-out'
          }}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default Password;
