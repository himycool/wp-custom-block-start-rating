<?php
function register_star_ratings()
{
    register_block_type('e25m-custom/star-ratings', array(
        'editor_script' => 'berg-block-js-vendor',
        'editor_style' => 'berg-block-editor-css',
        'style' => 'e25m-style-css',
        'render_callback' => 'star_ratings_render_callback',
        'attributes' => array(
            'startRatings' => array(
                'type' => 'string',
                'default'=> "0",
            ),
        )
    ));
}

add_action('init', 'register_star_ratings');


function star_ratings_render_callback($block_attributes)
{

    $startRatings = $block_attributes['startRatings'];

    ob_start();

    include 'view/layout.php';

    $output = ob_get_contents();
    ob_end_clean();
    return $output;
    
}