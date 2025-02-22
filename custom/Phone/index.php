<?php $this->need('custom/Phone/header.php');?>	
<?php $this->need('custom/Phone/nav.php');//左侧菜单?>	
<div class="main">
<div class="top-menu">
    <?php if (array_key_exists('ZeMenu', Typecho_Plugin::export()['activated'])){?>
    <div id="sidebarToggler" class="nav"><i class="iconfont icon-nav"></i></div>
    <?php }?>
    <div class="top-sitename"><a href="<?php $this->options->siteUrl(); ?>"><img src="<?php echo $this->options->logo ? $this->options->logo : Helper::options()->themeUrl . '/assets/default/logo.svg'; ?>"></a></div>
</div>
<?php if ($this->is('index')){?>
<!--如果是首页，则显示banner-->
<?php
// 获取banner开关状态
$switch = $this->options->switch;
if ($switch == 'on') {
    $lunbo = $this->options->Banner ?? '';
    $banner = explode(",", $lunbo, 3); 
    $n = count($banner);
    $link = array();
    $title = array();
    $thumbnails = array(); 
    for ($i = 0; $i < $n; $i++) {
        $cid = $banner[$i]; 
        $db = Typecho_Db::get();
        $row = $db->fetchRow($db->select()
            ->from('table.contents')
            ->where('cid = ?', $cid)
            ->where('type = ?', 'post')
            ->limit(1));
        if ($row) {
            $post = Typecho_Widget::widget('Widget_Abstract_Contents');
            $post->push($row);
            $link[$i] = $post->permalink;
            $title[$i] = $post->title;
            ob_start(); 
            showThumbnail($post);
            $thumbnails[$i] = ob_get_clean(); 
        }
    }
?>
<div class="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <a href="<?php echo $link[0] ?? 'https://oneblog.me'; ?>" style="background-image:url('<?php echo $thumbnails[0];?>')">
                <h2><?php echo $title[0] ?? '请填写文章cid'; ?></h2>
            </a>
        </div>
        <div class="swiper-slide">
            <a href="<?php echo $link[1] ?? 'https://oneblog.me'; ?>" style="background-image:url('<?php echo $thumbnails[1];?>')">
                <h2><?php echo $title[1] ?? '请填写文章cid'; ?></h2>
            </a>
        </div>
        <div class="swiper-slide">
            <a href="<?php echo $link[2] ?? 'https://oneblog.me'; ?>" style="background-image:url('<?php echo $thumbnails[2];?>')">
                <h2><?php echo $title[2] ?? '请填写文章cid'; ?></h2>
            </a>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
<?php }?>
<!--如果是首页 end-->
<?php }elseif ($this->is('category')) {
    $description = $this->getPageRow()['description'];
    $defaultBg = $this->options->ArticleListBg ? $this->options->ArticleListBg : Helper::options()->themeUrl . '/assets/default/bg.jpg';?>
    <div class="header" style="background-image:url('<?php echo (isset($description) && preg_match('/https?:\/\/[^\s]+/', $description)) ? $description : Helper::options()->themeUrl . '/assets/default/bg.jpg';?>')">
        <div class="pagetitle">
            <div class="slogan">
                <h1>
                <?php $this->archiveTitle(array(
                    'category'  =>  _t('%s'),
                    'search'    =>  _t('%s'),
                    'tag'       =>  _t('%s专栏'),
                    'author'    =>  _t('%s')
                    ), '', ''); ?>
                </h1> 
                <span>I saw, I read, I write.</span>
            </div>
        </div>
    </div>
<?php }else{?>
 <!--首页以外的文章列表显示页面标题-->
<div class="header" style="background-image:url('<?php echo $this->options->ArticleListBg ? $this->options->ArticleListBg : Helper::options()->themeUrl . '/assets/default/bg.jpg';?>')">
        <div class="pagetitle">
            <div class="slogan">
                <h1>
                <?php $this->archiveTitle(array(
                    'category'  =>  _t('%s'),
                    'search'    =>  _t('%s'),
                    'tag'       =>  _t('%s专栏'),
                    'author'    =>  _t('%s')
                    ), '', ''); ?>
                </h1> 
                <span>I saw, I read, I write.</span>
            </div>
        </div>
</div><!--网站顶栏需要重新设计-->
<?php } ?>
<div class="content" id="bloglist" ><!--文章列表-->    
<?php while($this->next()): ?>
    <div class="post_all">
        <div class="post_title_all">
            <h2><a href="<?php $this->permalink() ?>"><?php $this->title(); ?></a></h2>
        </div>
        <div class="post_preview_all">
            <p class="post_abstract"><?php $this->excerpt(40, '...'); ?></p>
            <?php if ($this->fields->thumb) { ?>
                <div class="post_img lazy-load" data-src="<?php echo $this->fields->thumb(); ?>"></div>
            <?php } elseif ($this->options->ListThumb == 'on' && $this->options->RandomIMG !== 'off') { ?>
                <div class="post_img lazy-load" data-src="<?php echo showThumbnail($this); ?>"></div>
            <?php } ?>
        </div>
        <div class="post_meta_all">
            <span class="post_date"><?php echo time_ago($this->date); ?></span>
            <span class="post_views"><?php get_post_view($this) ?>&nbsp;阅读</span>
            <span class="post_comment"><?php $this->commentsNum('0 评论', '1 评论', '%d 评论'); ?></span>
        </div>
    </div>
<?php endwhile; ?>
</div> 
<div class="page-navigator" style="display: none;">
    <?php $this->pageNav('', ''); ?>
</div>

<!-- 加载动画 -->
<div id="loading-spinner" style="display: none;">
    <div class="spinner"></div>加载中...
</div>

<?php $this->need('custom/Phone/footer.php');?>	