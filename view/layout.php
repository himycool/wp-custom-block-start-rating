<?php
$startRatings = $startRatings*2;
$rating = 100/10*$startRatings;
?>

<div class="star-ratings">
    <div class="fill-ratings rating-<?php echo $rating; ?>" style="width: calc(<?php echo $rating; ?>% + 4px);">
        <span><img src="<?php echo plugin_dir_url(__DIR__); ?>images/colored-star.png"> </span>
    </div>
    <div class="empty-ratings">
        <span><img src="<?php echo plugin_dir_url(__DIR__); ?>images/empty-star.svg"></span>
    </div>
</div>