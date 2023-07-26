import { ScoreIcons } from './ScoreIcons';

export const Score = () => {
    const score = 3;

    const empty = 5 - score;

    return (
        <ul className="flex">
            {Array.from(Array(score), (_, i) => (
                <li key={i}>{ScoreIcons.filled}</li>
            ))}
            {Array.from(Array(empty), (_, i) => (
                <li key={i}>{ScoreIcons.empty}</li>
            ))}
        </ul>
    );
};
