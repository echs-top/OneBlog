<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit;
$this->need('header.php');
if(isMobile()){  //移动端单独编写
    $this->need('custom/Phone/page.php');
}else{
    $this->need('custom/PC/page.php'); 
}?>
<?php $this->need('footer.php'); ?>