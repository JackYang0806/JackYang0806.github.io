$(document).ready(function(){
    var player=1;
    function clickClient(player){
        if(player==1){

            return    "black";
        }
        else {
            return   "white";
        }
    }
    var blackArr=[];
    var whiteArr=[];
    function pushGame(index,player){
        var count;
        count= rank(index);
        if(player==1){
            blackArr.push(count);
        }
        else {
            whiteArr.push(count);
        }
    }
    function rank(num){
        var x;
        var y;
        x=num%16;
        y=(num-x)/16;
        return  [x,y]
    }
    //计算横向五子
    function winnerCol(arrCol,index,player){
        var nullArrCol=[];
        var countdexCol=0;
        var lastCol=rank(index);
        lastCol=lastCol[1];
       for(var i=0;i<arrCol.length;i++){
           if(arrCol[i][1]==lastCol){
               countdexCol++;
               nullArrCol.push(arrCol[i][0]);
               if(countdexCol>=5){
                    nullArrCol=nullArrCol.sort(function (n1,n2) {return n1-n2});
                   var sumCol=0;
                   var sumTrueCol=0;
                   for(var j=0;j<nullArrCol.length-4;j++){
                       sumCol=nullArrCol[j]+nullArrCol[j+1]+nullArrCol[j+2]+nullArrCol[j+3]+nullArrCol[j+4];
                       sumTrueCol=nullArrCol[j]*5+10;
                       if(sumCol==sumTrueCol){
                           console.log(arrCol.sort(function (n1,n2) {return n1[0]-n2[0]}))
                           if(player==1)
                           {
                               alert("winner is white!");
                           }
                           else {
                               alert("winner is black!");
                           }
                           return false
                       }
                   }
               }

           }
       }
    }
    function winnerRow(arrRow,index,player){
    var nullArrRow=[];
    var countdexRow=0;
    var lastRow=rank(index);
    lastRow=lastRow[0];
    for(var i=0;i<arrRow.length;i++){
        if(arrRow[i][0]==lastRow){
            countdexRow++;
            nullArrRow.push(arrRow[i][1]);
            if(countdexRow>=5){
                nullArrRow=nullArrRow.sort(function (n1,n2) {return n1-n2});
                var sumRow=0;
                var sumTrueRow=0;
                for(var j=0;j<nullArrRow.length-4;j++){
                    sumRow=nullArrRow[j]+nullArrRow[j+1]+nullArrRow[j+2]+nullArrRow[j+3]+nullArrRow[j+4];
                    sumTrueRow=(nullArrRow[j+4])*5-10;
                    if(sumRow==sumTrueRow){
                        console.log(arrRow.sort(function (n1,n2) {return n1[0]-n2[0]}))
                        if(player==1)
                        {
                            alert("winner is white!");
                        }
                        else {
                            alert("winner is black!");
                        }
                        return false
                    }
                }
            }
        }

    }
}
    //    斜边\
function leanleft(arrleft,player){
    arrleft=(arrleft.sort(function (n1,n2) {return n1[0]-n2[0]}));
   for(var i=0;i<arrleft.length-4;i++){
       var leftclienX=arrleft[i][0];
       var leftclienY=arrleft[i][1];
       for(y1 in arrleft){
           if(arrleft[y1][0]==leftclienX+1&&arrleft[y1][1]==leftclienY+1){
               for(y2 in arrleft){
                   if(arrleft[y2][0]==leftclienX+2&&arrleft[y2][1]==leftclienY+2){
                       for(y3 in arrleft){
                           if(arrleft[y3][0]==leftclienX+3&&arrleft[y3][1]==leftclienY+3){
                               for(y4 in arrleft){
                                   if(arrleft[y4][0]==leftclienX+4&&arrleft[y4][1]==leftclienY+4){

                                       if(player==1)
                                       {
                                           alert("winner is white!");
                                       }
                                       else {
                                           alert("winner is black!");
                                       }
                                   }
                               }
                           }
                       }
                   }
               }
           }
       }
   }
}

    function leanRight(arrRight,player){
        arrRight=(arrRight.sort(function (n1,n2) {return n1[0]-n2[0]}));
        console.log(arrRight);
        for(var i=0;i<arrRight.length-4;i++){
            var rightclienX=arrRight[i][0];
            var rightclienY=arrRight[i][1];
            for(y1 in arrRight){
                if(arrRight[y1][0]==rightclienX+1&&arrRight[y1][1]==rightclienY-1){
                    for(y2 in arrRight){
                        if(arrRight[y2][0]==rightclienX+2&&arrRight[y2][1]==rightclienY-2){
                            for(y3 in arrRight){
                                if(arrRight[y3][0]==rightclienX+3&&arrRight[y3][1]==rightclienY-3){
                                    for(y4 in arrRight){
                                        if(arrRight[y4][0]==rightclienX+4&&arrRight[y4][1]==rightclienY-4){
                                            if(player==1)
                                            {
                                                alert("winner is white!");
                                            }
                                            else {
                                                alert("winner is black!");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    $("li").on("click", function () {
        var nullPlayer1=$(this).hasClass("black");
        var nullPlayer2=$(this).hasClass("white");
        if(nullPlayer1||nullPlayer2){
            alert("该位置已经下子！");
        }
        else {
            var styleNow=clickClient(player);
            $(this).addClass(styleNow);         //显示棋子
            var dex=$(this).index();    //获取该棋子的编号
            pushGame(dex,player);       //黑白棋子分别存入数据
            player=-player;         //交换选手
        }
        winnerCol(blackArr,dex,player);
        winnerCol(whiteArr,dex,player);
        winnerRow(blackArr,dex,player);
        winnerRow(whiteArr,dex,player);
        leanleft(whiteArr,player);
        leanleft(blackArr,player);
        leanRight(whiteArr,player);
        leanRight(blackArr,player);
    })


});