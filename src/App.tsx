import { useState } from 'react';
import { Emoji, TextWithEmoji, EmojiProvider } from 'react-emoji-store';
import { EmojiGrid } from './EmojiGrid';

function App() {
  const [text, setText] = useState("Exploring the universe 🚀 with React! It's absolutely 😂 and 🚴‍♀️ adventurous. Don't forget to 👍🏾 if you like it!");

  return (
    <EmojiProvider>
      <div className="container">
        <div className="hero">
          <div className="badge">React Emoji Library</div>
          <h1>React Emoji Store</h1>
          <p>An easier way to render Microsoft Fluent Animated Emojis in your React applications.</p>
          <EmojiGrid />
        </div>

        <div className="section">
          <h2 className="section-title">
            <Emoji emoji="🎨" size={24} /> Component: &lt;Emoji /&gt;
          </h2>
          <div className="grid">
            <div className="card">
              <h3>Standard Rendering</h3>
              <div className="demo-display">
                <Emoji emoji="🔥" size={64} />
              </div>
            </div>
            <div className="card">
              <h3>Skin Tone Variants</h3>
              <div className="demo-display" style={{ gap: '10px' }}>
                <Emoji emoji="👍" size={48} />
                <Emoji emoji="👍🏻" size={48} />
                <Emoji emoji="👍🏼" size={48} />
                <Emoji emoji="👍🏽" size={48} />
                <Emoji emoji="👍🏾" size={48} />
                <Emoji emoji="👍🏿" size={48} />
              </div>
            </div>
            <div className="card">
              <h3>Complex Sequences</h3>
              <div className="demo-display" style={{ gap: '15px' }}>
                <Emoji emoji="🚴‍♂️" size={48} />
                <Emoji emoji="🧑‍🚀" size={48} />
                <Emoji emoji="🏂" size={48} />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">
            <Emoji emoji="📝" size={24} /> Component: &lt;TextWithEmoji /&gt;
          </h2>
          <div className="text-input-container">
            <span className="output-label">Live Preview Input</span>
            <textarea
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type some emojis here..."
            />
            <span className="output-label">Rendered Output</span>
            <div className="output">
              <TextWithEmoji size={28}>{text}</TextWithEmoji>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">
            <Emoji emoji="🛡️" size={24} /> Fallback Behavior
          </h2>
          <div className="grid">
            <div className="card" style={{ gridColumn: '1 / -1' }}>
              <h3>Native Fallback (Unknown Emojis)</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                If an asset is missing or the emoji is not found in the CDN, it gracefully falls back to native rendering.
              </p>
              <div className="demo-display" style={{ fontSize: '32px' }}>
                {/* Use an obscure emoji that likely won't have an asset */}
                <Emoji emoji="🪩" size={48} />
                <span style={{ marginLeft: '1rem', fontSize: '1rem', color: 'var(--text-muted)' }}>
                  (Renders as native 🪩 if WebP is missing)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EmojiProvider>
  )
}

export default App
