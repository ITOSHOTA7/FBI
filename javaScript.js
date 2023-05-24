$(function () {
//    こんなかにいれないといけない

    // ①btnが押される
    $("#btn").on("click", function () {
        
        let postcode = $("#post_code").val()

        
        let parameter = {
            zipcode: postcode
           
        }

        $.ajax({
            url: 'https://zipcloud.ibsnet.co.jp/api/search', //アクセスするURL　　　　場所
            type: 'get', //post or get　　　　　　　　　　　　　　　
            cache: false,        
            dataType: 'json',     //data type script・xmlDocument・jsonなど　　
            data: parameter,           //アクセスするときに必要なデータを記載  
        })
            .done(function (response) {
                //通信成功時の処理
                //成功したとき実行したいスクリプトを記載
                
                console.log(response.results[0].address1);  // 県
                console.log(response.results[0].address2); // 市町村
                console.log(response.results[0].address3); // 町名
                

                // ①htmlにタグを追加（DOMを作る）
                let addressRes = $("<p>");
                // ②　　①で作ったタグに都道府県町市のテキストを追加
                
                addressRes.text(response.results[0].address1 + response.results[0].address2 + response.results[0].address3)
                
                // ③　　btnのすぐ下に表示する（子供を親に合わせる）くっつける
                addressRes.insertAfter("#btn");

                


            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載

            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });




    })





})