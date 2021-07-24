var notes =["Ab", "A", "A#", "Bb", "B", "B#", "Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#"];

// Declare all key scales (multidimensional arrays in the order: major, natural minor, harmonic minor, melodic minor ascending).
var keys = [[['Ab','Bb','C','Db','Eb','F','G','Ab'], ['Ab','Bb','Cb','Db','Eb','Fb','Gb','Ab'], ['Ab','Bb','Cb','Db','Eb','Fb','G','Ab'], ['Ab','Bb','Cb','Db','Eb','F','G','Ab']], //Ab
			[['A','B','C#','D','E','F#','G#','A'], ['A','B','C','D','E','F','G','A'], ['A','B','C','D','E','F','G#','A'], ['A','B','C','D','E','F#','G#','A']],  // A
			[['A#','B#','Cx','D#','E#','Fx','Gx','A#'], ['A#','B#','C#','D#','E#','F#','G#','A#'], ['A#','B#','C#','D#','E#','F#','Gx','A#'], ['A#','B#','C#','D#','E#','Fx','Gx','A#']],  // A#
			[['Bb','C','D','Eb','F','G','A','Bb'], ['Bb','C','Db','Eb','F','Gb','Ab','Bb'], ['Bb','C','Db','Eb','F','Gb','A','Bb'], ['Bb','C','Db','Eb','F','G','A','Bb']],  // Bb
			[['B','C#','D#','E','F#','G#','A#','B'], ['B','C#','D','E','F#','G','A','B'], ['B','C#','D','E','F#','G','A#','B'], ['B','C#','D','E','F#','G#','A#','B']],  // B
			[['Cb','Db','Eb','Fb','Gb','Ab','Bb','Cb'], ['Cb','Db','Ebb','Fb','Gb','Abb','Bbb','Cb'], ['Cb','Db','Ebb','Fb','Gb','Abb','Bb','Cb'], ['Cb','Db','Ebb','Fb','Gb','Ab','Bb','Cb']],  // Cb
			[['C','D','E','F','G','A','B','C'], ['C','D','Eb','F','G','Ab','Bb','C'], ['C','D','Eb','F','G','Ab','B','C'], ['C','D','Eb','F','G','A','B','C']],  // C
			[['C#','D#','E#','F#','G#','A#','B#','C#'], ['C#','D#','E','F#','G#','A','B','C#'], ['C#','D#','E','F#','G#','A','B#','C#'], ['C#','D#','E','F#','G#','A#','B#','C#']],  // C#
			[['Db','Eb','F','Gb','Ab','Bb','C','Db'], ['Db','Eb','Fb','Gb','Ab','Bbb','Cb','Db'], ['Db','Eb','Fb','Gb','Ab','Bbb','C','Db'], ['Db','Eb','Fb','Gb','Ab','Bb','C','Db']],  // Db
			[['D','E','F#','G','A','B','C#','D'], ['D','E','F','G','A','Bb','C','D'], ['D','E','F','G','A','Bb','C#','D'], ['D','E','F','G','A','B','C#','D']],  // D
			[['D#','E#','Fx','G#','A#','B#','Cx','D#'], ['D#','E#','F#','G#','A#','B','C#','D#'], ['D#','E#','F#','G#','A#','B','Cx','D#'], ['D#','E#','F#','G#','A#','B#','Cx','D#']],  // D#
			[['Eb','F','G','Ab','Bb','C','D','Eb'], ['Eb','F','Gb','Ab','Bb','Cb','Db','Eb'], ['Eb','F','Gb','Ab','Bb','Cb','D','Eb'], ['Eb','F','Gb','Ab','Bb','C','D','Eb']],  // Eb
			[['E','F#','G#','A','B','C#','D#','E'], ['E','F#','G','A','B','C','D','E'], ['E','F#','G','A','B','C','D#','E'], ['E','F#','G','A','B','C#','D#','E']],  // E
			[['E#','Fx','Gx','A#','B#','Cx','Dx','E#'], ['E#','Fx','G#','A#','B#','C#','D#','E#'], ['E#','Fx','G#','A#','B#','C#','Dx','E#'], ['E#','Fx','G#','A#','B#','Cx','Dx','E#']],  // E#
			[['Fb','Gb','Ab','Bbb','Cb','Db','Eb','Fb'], ['Fb','Gb','Ab','Bbb','Cb','Db','Eb','Fb'], [], []],  // Fb
			[['F','G','A','Bb','C','D','E','F'], ['F','G','Ab','Bb','C','Db','Eb','F'], ['F','G','Ab','Bb','C','Db','E','F'], ['F','G','Ab','Bb','C','D','E','F']],  // F
			[['F#','G#','A#','B','C#','D#','E#','F#'], ['F#','G#','A','B','C#','D','E','F#'], ['F#','G#','A','B','C#','D','E#','F#'], ['F#','G#','A','B','C#','D#','E#','F#']],  // F#
			[['G','A','B','C','D','E','F','G'], ['G','A','Bb','C','D','Eb','F','G'], ['G','A','Bb','C','D','Eb','F#','G'], ['G','A','Bb','C','D','E','F#','G']]]; // G

