function bowlingScore(frames) {
  // Figure out the score
  // sample input
//  '17 60 6/ 80 32 52 17 0/ X 12'

//  '00 00 00 00 00 00 00 00 X 0/X'));
  // woah! Perfect game!
//  X X X X X X X X X XX1ty'));

  //'1/ 11 11 11 1/ 51 11 11 11 11'

  //console.log(frames)
  var s = frames.split(' ');  // creates array with index for each frame
  var sum = 0;

  for( var i = 0; i < s.length -1; i++ ){
      for (var j = 0; j < s[i].length; j++){
        if( !(isNaN(s[i][j])) )
          sum += Number(s[i][j]);
        else if( s[i][j] == '/'){
          if (s[i+1][0] == 'X')
            sum += 20 - Number(s[i][j-1])
          else
            sum += 10 - Number(s[i][j-1]) + Number(s[i+1][0])
        }
        else if( s[i][j] == 'X'){
          if (i == 8){
            if(s[9][0] == 'X' && s[9][1] == 'X')
              sum += 30;
            else if (s[9][0] == 'X')
              sum += 20 + Number(s[9][1])
            else if (s[9][1] == '/')
              sum += 20
            else
              sum += Number(s[9][0]) + Number(s[9][1])
          }
          else if (s[i+1] == 'X' && s[i+2][0] == 'X')
            sum += 30;
          else if (s[i+1][1] == '/')
            sum += 20;
          else if ( s[i+1] == 'X')
              sum += 20 + Number(s[i+2][0]);
          else
            sum += 10 + Number(s[i+1][0]) + Number(s[i+1][1]);
        }

     }
  }

  if(s[9].length == 2) { //case for last frame when no strikes or spares were made on last frame
    sum += Number(s[9][0]) + Number(s[9][1])
  }
  else
    if( s[9][1] == '/'){   // case for when a spare was scored on second roll in last frame
      if(s[9][2] == 'X')
        sum += 20;
      else
        sum += 10 + Number(s[9][2]);
    }
    if(s[9][0] == 'X'){   // case where first roll was strike on last frames
        if( s[9][1] == 'X' && s[9][2] == 'X')
          sum += 30;
        else if(s[9][2] == '/')
          sum += 20
        else if (s[9][1] == 'X')
           sum += 20 +  Number(s[9][2]);
        else
           sum += 10 + Number(s[9][1]) + Number(s[9][2])
    }
  return sum;
}


console.log(bowlingScore('17 60 6/ 80 32 52 17 0/ X 12'));

console.log(bowlingScore('00 00 00 00 00 00 00 00 X 0/X'));
// woah! Perfect game!
console.log(bowlingScore('X X X X X X X X X XXX'));

console.log(bowlingScore('1/ 11 11 11 1/ 51 11 11 11 11'));
/// 16 X 02 90 90 X 26 90 70 XX1 should be a 102 - Expected: 102, instead got: 81
