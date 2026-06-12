import { useEffect, useState } from 'react';
import { Emoji } from 'react-emoji-store';

const EMOJIS = [
    '😂', '🚀', '🔥', '🌈', '🚴‍♂️', '🧑‍🚀', '🦄', '🛫', '🐐', '🌟',
    '🛸', '🎉', '😉', '🙀', '😜', '🤩', '🦋', '🐃', '🦖', '🐸',
    '🦚', '🐞', '🚕', '🐶', '🐱', '😍', '😎', '🤩', '🥳', '👋',
    '🍃', '🦠', '🐋', '🐍', '😀', '😁', '😅', '🤣', '💯', '💘'
];

export const EmojiGrid = () => {
    const [centerEmoji, setCenterEmoji] = useState('🌈');
    const [tiles, setTiles] = useState<string[]>([]);

    useEffect(() => {
        // Fill tiles with random emojis (except center)
        const newTiles = Array(40).fill(0).map(() => EMOJIS[Math.floor(Math.random() * EMOJIS.length)]);
        setTiles(newTiles);

        const interval = setInterval(() => {
            setCenterEmoji(EMOJIS[Math.floor(Math.random() * EMOJIS.length)]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="emoji-grid-container fade-in">
            {tiles.map((emoji, i) => (
                <div key={i} className="grid-tile" onClick={() => setCenterEmoji(emoji)}>
                    <Emoji emoji={emoji} size={24} />
                </div>
            ))}
            <div className="central-tile">
                <Emoji emoji={centerEmoji} size={180} />
            </div>
        </div>
    );
};
