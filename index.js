$(document).ready(function(){

    /**
     * Sự kiện show dropdown
     */
    $(".input-field .arrow").on("click", function(e){
        let $item = $(this),
            $drDown = $(".drop-down");
            
        if($item.hasClass("down")){
            $item.removeClass("down");
            $drDown.hide();
        }else{
            $item.addClass("down");
            $drDown.show();
        }
        
    });

    /**
     * Sự kiện click item chọn
     */
    $(".drop-down .dr-item").on("click", function(e) {
        let $item = $(this),
            val = $item.find(".text").text(),
            $parent = $item.parents('.content-control'),
            $cboDate = $parent.find("#cboDate");

            //bỏ active
            $item.parents(".drop-down").find(".dr-item").removeClass("active");

            //Gán giá trị cho input
            $cboDate.val(val);
            
            //addclass active cho element
            $item.addClass("active");

            //show item clear
            $parent.find('.btn-clear').show();
    });

    /**
     * Sự kiện click ô clear text input
     */
    $('.input-field .btn-clear').on("click", function(){
        let $item = $(this),
            $parent = $item.parents('.content-control');

        //Bỏ active item drop down
        $parent.find(".drop-down .dr-item").removeClass("active");
        //xóa giá trị ô input
        $parent.find("#cboDate").val("");
        //Ẩn nút clear
        $item.hide();
    });

    /**
     * Ẩn dropdown khi click ra ngoài button arrow
     */
    $(document).on("click", function(e){
        let $el = $(e.target),
            isArrow = $el.data("arrow"); //đây là cách lấy attribute data- mà jquery cung cấp để thao tác với element

        //Nếu không phải class arrow => hide dropdown
        if(!isArrow){
            $(".content-control .drop-down").hide();
            $(".content-control .arrow").removeClass("down");
        }
    })
});