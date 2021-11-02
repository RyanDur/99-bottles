import {downTo} from './helpers';

export const Bottles = function () {
  const verse = (position) => {
    switch (position) {
      case 0:
        return 'No more bottles of milk on the wall, ' +
          'no more bottles of milk.\n' +
          'Go to the store and buy some more, ' +
          '99 bottles of milk on the wall.\n';
      case 1:
        return '1 bottle of milk on the wall, ' +
          '1 bottle of milk.\n' +
          'Take it down and pass it around, ' +
          'no more bottles of milk on the wall.\n';
      case 2:
        return '2 bottles of milk on the wall, ' +
          '2 bottles of milk.\n' +
          'Take one down and pass it around, ' +
          '1 bottle of milk on the wall.\n';
      default:
        return `${position} bottles of milk on the wall, ` +
          `${position} bottles of milk.\n` +
          'Take one down and pass it around, ' +
          `${position - 1} bottles of milk on the wall.\n`;
    }
  };

  const verses = (start, end) => downTo(start, end).map(verse).join('\n');

  const song = () => verses(99, 0);

  return {
    verse,
    verses,
    song
  };
};
