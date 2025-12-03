// Testimonials Post Type 
add_action( 'init', 'codex_Tes_init' );
function codex_Testimonials_init() {
	$labels = array(
		'name'               => _x( 'Testimonials', 'post type general name', 'hello-elementor' ),
		'singular_name'      => _x( 'Testimonials', 'post type singular name', 'hello-elementor' ),
		'menu_name'          => _x( 'Testimonials', 'admin menu', 'hello-elementor' ),
		'name_admin_bar'     => _x( 'Testimonials', 'add new on admin bar', 'hello-elementor' ),
		'add_new'            => _x( 'Add New', 'Testimonial', 'hello-elementor' ),
		'add_new_item'       => __( 'Add New Testimonial', 'hello-elementor' ),
		'new_item'           => __( 'New Testimonial', 'hello-elementor' ),
		'edit_item'          => __( 'Edit Testimonial', 'hello-elementor' ),
		'view_item'          => __( 'View Testimonials', 'hello-elementor' ),
		'all_items'          => __( 'All Testimonials', 'hello-elementor' ),
		'search_items'       => __( 'Search Testimonial', 'hello-elementor' ),
		'parent_item_colon'  => __( 'Parent Testimonial:', 'hello-elementor' ),
		'not_found'          => __( 'No Testimonial found.', 'hello-elementor' ),
		'not_found_in_trash' => __( 'No Testimonial found in Trash.', 'hello-elementor' )
	);
	$args = array(
		'labels'             => $labels,
        'description'        => __( 'Description.', 'hello-elementor' ),
		'public'             => true,
		'menu_icon'          => 'dashicons-groups',
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'testimonials' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 20,
		'supports'           => array( 'title', 'thumbnail', 'editor', 'author' )
	);
	register_post_type( 'testimonials', $args );
}