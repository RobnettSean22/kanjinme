DELETE FROM kanji3

WHERE user_id = $1 AND folder_id = $2 AND kanji_id = $3;

SELECT *
FROM kanji3