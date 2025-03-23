<!--微语页面样式-->
<?php $this->need('custom/PC/header.php');?>
<meta name="csrf-token" content="<?php echo Helper::security()->getToken($this->request->getRequestUrl()); ?>">
<meta name="comment-url" content="<?php $this->commentUrl(); ?>">
<!--全局容器-->
<div class="main">
    <div class="page_thumb padding"  style="background-image:url('<?php echo $this->fields->thumb ? $this->fields->thumb : Helper::options()->themeUrl . '/assets/default/bg.jpg';?>')">
        <a class="logo" href="<?php $this->options->siteUrl(); ?>">
            <img src="<?php echo $this->options->logoX ? $this->options->logoX : Helper::options()->themeUrl . '/assets/default/logo.png'; ?>">
            <div class="slogan">
                <h1><?php $this->options->title();?></h1>
                <span><?php echo $this->options->slogan ? $this->options->slogan : '自豪地使用ONEBLOG主题';?></span>
            </div>
        </a>
        <div class="memos-btn">
            <?php if($this->user->hasLogin()): ?>
                <button id="publish-button">发布</button>
            <?php else: ?>
                <button id="login-button">登录</button>
            <?php endif; ?>
        </div>
    </div>
    <!--微语列表-->
    <div id="comments" class="memos animated fadeIn">
        <?php $this->comments()->to($comments); ?>
        <?php if ($comments->have()): ?>
            <ul class="comment-list">
                <?php while($comments->next()): ?>
                    <?php MemosList($comments, $this->user); ?>
                <?php endwhile; ?>
            </ul>
            <?php $comments->pageNav('', ''); ?>
            <div id="loading-spinner" style="display: none;">
                <div class="spinner"></div>加载中...
            </div>
            <div class="end" id="no-more" style="display: none;">END</div>
        <?php endif; ?>
    </div>
    <a id="gototop" class="hidden"><i class="iconfont icon-up"></i></a>
</div>
<!--传给js处理-->
<script>
    var loginAction = "<?php echo $this->options->loginAction(); ?>";
    var commentLikeUrl = "<?php Helper::options()->index("?commentLike=dz"); ?>";
</script>
<?php $this->need('custom/PC/footer.php'); ?>