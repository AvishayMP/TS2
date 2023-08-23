// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 

// התשובה חייבת להכיל
// ENUM
// type/interface
// union

// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה
enum Choice {
    Paper,
    Rock,
    Scissors
}
type Player = Choice | undefined;
function playGame(player1: Player, player2: Player): string {
    if (typeof player1 === 'undefined' || typeof player2 === 'undefined') {
        return 'Throw Error: No move insert';
    } else {
        if (player1 === player2) {
            return 'tie';
        }
        if (player1 == Choice.Paper && player2 == Choice.Rock ||
            player1 == Choice.Rock && player2 == Choice.Scissors ||
            player1 == Choice.Scissors && player2 == Choice.Paper) {
            return 'player1';
        } else {
            return 'player2';
        }
    }
}
let player1 = Choice.Paper, player2 = Choice.Scissors;

const play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie

