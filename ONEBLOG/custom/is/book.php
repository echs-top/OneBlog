<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; 

$agent = strtolower($_SERVER['HTTP_USER_AGENT']);
$is_ipad = (strpos($agent, 'ipad')) ? true : false;
   if($is_ipad){  //如果客户端是iPad
        $this->need('/custom/iPad/book.php');
   }elseif (isMobile()) { //如果客户端是手机
        $this->need('/custom/Phone/book.php');
   }else{ //否则都是电脑
        $this->need('/custom/PC/book.php'); }
?>