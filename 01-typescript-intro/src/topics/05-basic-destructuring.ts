interface AudioPlayer {
    audioVolumen: number;
    soungDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    soungDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheren',
        year: 2015,
    },
};

const song = 'new song';
const { song: songProperty, details } = audioPlayer;

const { author } = details;

// console.log('Song: ', songProperty);
// console.log('SoungDuration: ', audioPlayer.soungDuration);
// console.log('Author: ', author);

const array: string[] = ['aaa', 'bbbb', 'ccccc'];
// const index3 = array[3] || 'No existe';

const [, , index3, index4 = 'No Existe'] = array;

console.log('Index3: ', index3);
console.log('Index3: ', index4);

export {};
