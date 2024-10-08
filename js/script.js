document.addEventListener('DOMContentLoaded', function() {
    const deviceTypeSelect = document.getElementById('deviceType');
    const modelSelect = document.getElementById('model');
    const issueSelect = document.getElementById('issue');
    const priceSpan = document.getElementById('price');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links li a');
    const bookNowContainer = document.getElementById('book-now-container');

    const issues = {
        'iphone': [{
                value: "screen_replacement_aftermarket",
                label: "Screen Replacement (Aftermarket)"
            },
            {
                value: "screen_replacement_premium",
                label: "Screen Replacement (Premium)"
            },
            {
                value: "battery_replacement",
                label: "Battery Replacement"
            },
	    {
                value: "charging_port_replacement",
                label: "Charging Port Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            },
            {
                value: "front_camera",
                label: "Front Camera"
            },
            {
                value: "rear_camera",
                label: "Rear/Main Camera"
            },
            {
                value: "camera_lens",
                label: "Camera Lens"
            },
            {
                value: "housing_replacement",
                label: "Housing Replacement"
            }
        ],
        'samsung_s': [{
                value: "screen_replacement",
                label: "Screen Replacement (Original)"
            },
            {
                value: "battery_replacement",
                label: "Battery Replacement"
            },
            {
                value: "charging_port_replacement",
                label: "Charging Port Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            },
            {
                value: "front_camera",
                label: "Front Camera"
            },
            {
                value: "rear_camera",
                label: "Rear/Main Camera"
            },
            {
                value: "back_glass_replacement",
                label: "Back Glass Replacement"
            }
        ],
        'samsung_a': [{
                value: "screen_replacement",
                label: "Screen Replacement (Original)"
            },
            {
                value: "battery_replacement",
                label: "Battery Replacement"
            },
            {
                value: "charging_port_replacement",
                label: "Charging Port Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            },
            {
                value: "front_camera",
                label: "Front Camera"
            },
            {
                value: "rear_camera",
                label: "Rear/Main Camera"
            }
        ],
        'samsung_note': [{
                value: "screen_replacement",
                label: "Screen Replacement (Original)"
            },
            {
                value: "battery_replacement",
                label: "Battery Replacement"
            },
            {
                value: "charging_port_replacement",
                label: "Charging Port Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            },
            {
                value: "front_camera",
                label: "Front Camera"
            },
            {
                value: "rear_camera",
                label: "Rear/Main Camera"
            },
            {
                value: "back_glass_replacement",
                label: "Back Glass Replacement"
            }
        ],
        'pixel': [{
                value: "screen_replacement",
                label: "Screen Replacement"
            },
            {
                value: "charging_port_service",
                label: "Charging Port Service"
            }
        ],
        'ipad': [{
                value: "screen_replacement",
                label: "Screen Replacement"
            },
            {
                value: "lcd_replacement",
                label: "LCD Replacement"
            }
        ],
	'ipad_mini': [{
		value: "lcd_display_replacement",
                label: "LCD Display Replacement"
            }
        ],
	'ipad_air': [{
                value: "lcd_display_replacement",
                label: "LCD Display Replacement"
            }
        ],
	'ipad_pro': [{
                value: "lcd_display_replacement",
                label: "LCD Display Replacement"
            }
        ],
    };

    const prices = {
        'iphone': {
            'iphone_8': {
                'screen_replacement_aftermarket': 60,
                'screen_replacement_premium': 80,
                'battery_replacement': 50,
		'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 80,
                'camera_lens': 25,
                'housing_replacement': 110
            },
            'iphone_se': {
                'screen_replacement_aftermarket': 60,
                'screen_replacement_premium': 80,
                'battery_replacement': 50,
		'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 80,
                'camera_lens': 25,
                'housing_replacement': 110
            },
            'iphone_x': {
                'screen_replacement_aftermarket': 90,
                'screen_replacement_premium': 100,
                'battery_replacement': 60,
		'charging_port_replacement': 80,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 100,
                'camera_lens': 40,
                'housing_replacement': 140
            },
            'iphone_xs': {
                'screen_replacement_aftermarket': 90,
                'screen_replacement_premium': 120,
                'battery_replacement': 60,
		'charging_port_replacement': 80,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 130,
                'camera_lens': 40,
                'housing_replacement': 170
            },
            'iphone_xr': {
                'screen_replacement_aftermarket': 80,
                'screen_replacement_premium': 130,
                'battery_replacement': 60,
		'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 100,
                'camera_lens': 40,
                'housing_replacement': 150
            },
            'iphone_xs_max': {
                'screen_replacement_aftermarket': 100,
                'screen_replacement_premium': 200,
                'battery_replacement': 70,
		'charging_port_replacement': 80,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 130,
                'camera_lens': 40,
                'housing_replacement': 180
            },
            'iphone_11': {
                'screen_replacement_aftermarket': 70,
                'screen_replacement_premium': 110,
                'battery_replacement': 70,
		'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 110,
                'camera_lens': 40,
                'housing_replacement': 160
            },
            'iphone_11_pro': {
                'screen_replacement_aftermarket': 100,
                'screen_replacement_premium': 190,
                'battery_replacement': 70,
		'charging_port_replacement': 90,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 170,
                'camera_lens': 50,
                'housing_replacement': 220
            },
            'iphone_11_pro_max': {
                'screen_replacement_aftermarket': 120,
                'screen_replacement_premium': 210,
                'battery_replacement': 80,
		'charging_port_replacement': 90,
                'charging_port_service': 20,
                'front_camera': 80,
                'rear_camera': 170,
                'camera_lens': 50,
                'housing_replacement': 240
            },
            'iphone_12': {
                'screen_replacement_aftermarket': 130,
                'screen_replacement_premium': 240,
                'battery_replacement': 80,
		'charging_port_replacement': 90,
                'charging_port_service': 20,
                'front_camera': 80,
                'rear_camera': 130,
                'camera_lens': 50,
                'housing_replacement': 220
            },
            'iphone_12_pro': {
                'screen_replacement_aftermarket': 120,
                'screen_replacement_premium': 240,
                'battery_replacement': 80,
		'charging_port_replacement': 90,
                'charging_port_service': 20,
                'front_camera': 80,
                'rear_camera': 240,
                'camera_lens': 50,
                'housing_replacement': 250
            },
            'iphone_12_pro_max': {
                'screen_replacement_aftermarket': 130,
                'screen_replacement_premium': 250,
                'battery_replacement': 90,
		'charging_port_replacement': 90,
                'charging_port_service': 20,
                'front_camera': 80,
                'rear_camera': 250,
                'camera_lens': 50,
                'housing_replacement': 260
            },
            'iphone_13': {
                'screen_replacement_aftermarket': 130,
                'screen_replacement_premium': 250,
                'battery_replacement': 90,
		'charging_port_replacement': 90,
                'charging_port_service': 20,
                'front_camera': 80,
                'rear_camera': 110,
                'camera_lens': 50,
                'housing_replacement': 150
            },
            'iphone_13_mini': {
                'screen_replacement_aftermarket': 110,
                'screen_replacement_premium': 200,
                'battery_replacement': 80,
		'charging_port_replacement': 90,
                'charging_port_service': 20,
                'front_camera': 80,
                'rear_camera': 110,
                'camera_lens': 50,
                'housing_replacement': 170
            },
            'iphone_13_pro': {
                'screen_replacement_aftermarket': 150,
                'screen_replacement_premium': 300,
                'battery_replacement': 90,
		'charging_port_replacement': 100,
                'charging_port_service': 20,
                'front_camera': 80,
                'rear_camera': 250,
                'camera_lens': 50,
                'housing_replacement': 300
            },
            'iphone_13_pro_max': {
                'screen_replacement_aftermarket': 250,
                'screen_replacement_premium': 450,
                'battery_replacement': 90,
		'charging_port_replacement': 100,
                'charging_port_service': 20,
                'front_camera': 80,
                'rear_camera': 250,
                'camera_lens': 50,
                'housing_replacement': 350
            },
            'iphone_14': {
                'screen_replacement_aftermarket': 130,
                'screen_replacement_premium': 250,
                'battery_replacement': 100,
		'charging_port_replacement': 100,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0,
                'camera_lens': 50,
                'housing_replacement': 150
            },
            'iphone_14_plus': {
                'screen_replacement_aftermarket': 150,
                'screen_replacement_premium': 280,
                'battery_replacement': 100,
		'charging_port_replacement': 100,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0,
                'camera_lens': 50,
                'housing_replacement': 150
            },
            'iphone_14_pro': {
                'screen_replacement_aftermarket': 250,
                'screen_replacement_premium': 550,
                'battery_replacement': 100,
		'charging_port_replacement': 120,
                'charging_port_service': 20,
                'front_camera': 100,
                'rear_camera': 250,
                'camera_lens': 50,
                'housing_replacement': 300
            },
            'iphone_14_pro_max': {
                'screen_replacement_aftermarket': 300,
                'screen_replacement_premium': 600,
                'battery_replacement': 100,
		'charging_port_replacement': 120,
                'charging_port_service': 20,
                'front_camera': 100,
                'rear_camera': 250,
                'camera_lens': 50,
                'housing_replacement': 350
            },
	    'iphone_15': {
                'screen_replacement_aftermarket': 240,
                'screen_replacement_premium': 470,
                'battery_replacement': 0,
		'charging_port_replacement': 130,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 130,
                'camera_lens': 50,
                'housing_replacement': 240
            },
            'iphone_15_plus': {
                'screen_replacement_aftermarket': 320,
                'screen_replacement_premium': 0,
                'battery_replacement': 0,
		'charging_port_replacement': 150,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 130,
                'camera_lens': 50,
                'housing_replacement': 300
            },
            'iphone_15_pro': {
                'screen_replacement_aftermarket': 360,
                'screen_replacement_premium': 0,
                'battery_replacement': 0,
		'charging_port_replacement': 150,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0,
                'camera_lens': 50,
                'housing_replacement': 340
            },
            'iphone_15_pro_max': {
                'screen_replacement_aftermarket': 380,
                'screen_replacement_premium': 0,
                'battery_replacement': 0,
		'charging_port_replacement': 120,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0,
                'camera_lens': 50,
                'housing_replacement': 380
            }
        },
        'samsung_s': {
            'samsung_s10e': {
                'screen_replacement': 260,
                'battery_replacement': 60,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 90,
                'back_glass_replacement': 50
            },
            'samsung_s10': {
                'screen_replacement': 360,
                'battery_replacement': 60,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 90,
                'back_glass_replacement': 50
            },
            'samsung_s10_plus': {
                'screen_replacement': 400,
                'battery_replacement': 60,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 90,
                'back_glass_replacement': 50
            },
            'samsung_s20': {
                'screen_replacement': 400,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 150,
                'back_glass_replacement': 60
            },
            'samsung_s20_plus': {
                'screen_replacement': 400,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 150,
                'back_glass_replacement': 60
            },
            'samsung_s20_fe': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 100,
                'back_glass_replacement': 50
            },
            'samsung_s20_ultra': {
                'screen_replacement': 400,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 150,
                'back_glass_replacement': 60
            },
            'samsung_s21': {
                'screen_replacement': 350,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 150,
                'back_glass_replacement': 60
            },
            'samsung_s21_fe': {
                'screen_replacement': 300,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 150,
                'back_glass_replacement': 60
            },
            'samsung_s21_plus': {
                'screen_replacement': 350,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 150,
                'back_glass_replacement': 60
            },
            'samsung_s21_ultra': {
                'screen_replacement': 450,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 260,
                'back_glass_replacement': 60
            },
            'samsung_s22': {
                'screen_replacement': 350,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 120,
                'back_glass_replacement': 60
            },
            'samsung_s22_plus': {
                'screen_replacement': 350,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 120,
                'back_glass_replacement': 60
            },
            'samsung_s22_ultra': {
                'screen_replacement': 400,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 150,
                'back_glass_replacement': 170
            },
            'samsung_s23': {
                'screen_replacement': 350,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 150,
                'back_glass_replacement': 70
            },
            'samsung_s23_fe': {
                'screen_replacement': 320,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0,
                'back_glass_replacement': 70
            },
            'samsung_s23_plus': {
                'screen_replacement': 380,
                'battery_replacement': 70,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 70,
                'rear_camera': 150,
                'back_glass_replacement': 70
            },
            'samsung_s23_ultra': {
                'screen_replacement': 450,
                'battery_replacement': 80,
                'charging_port_replacement': 70,
                'charging_port_service': 20,
                'front_camera': 80,
                'rear_camera': 230,
                'back_glass_replacement': 70
            }
        },
        'samsung_a': {
            'samsung_a02': {
                'screen_replacement': 120,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
	    'samsung_a02s': {
                'screen_replacement': 120,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
	    'samsung_a03': {
                'screen_replacement': 120,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
	    'samsung_a03s': {
                'screen_replacement': 120,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
	    'samsung_a04': {
                'screen_replacement': 150,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
	    'samsung_a04s': {
                'screen_replacement': 150,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
	    'samsung_a05': {
                'screen_replacement': 0,
                'battery_replacement': 0,
                'charging_port_replacement': 0,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
	    'samsung_a05s': {
                'screen_replacement': 0,
                'battery_replacement': 0,
                'charging_port_replacement': 0,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
	    'samsung_a11': {
                'screen_replacement': 100,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
            'samsung_a12': {
                'screen_replacement': 100,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
            'samsung_a13_4g': {
                'screen_replacement': 100,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 0
            },
            'samsung_a13_5g': {
                'screen_replacement': 100,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
            'samsung_a14_4g': {
                'screen_replacement': 100,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a14_5g': {
                'screen_replacement': 100,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 50
            },
            'samsung_a20': {
                'screen_replacement': 160,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a20s': {
                'screen_replacement': 150,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a21': {
                'screen_replacement': 150,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a21s': {
                'screen_replacement': 150,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 40,
                'rear_camera': 60
            },
            'samsung_a22_4g': {
                'screen_replacement': 170,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a22_5g': {
                'screen_replacement': 150,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 60
            },
            'samsung_a23_4g': {
                'screen_replacement': 150,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 60
            },
	    'samsung_a23_5g': {
                'screen_replacement': 150,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a30': {
                'screen_replacement': 180,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 80
            },
            'samsung_a30s': {
                'screen_replacement': 180,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a31': {
                'screen_replacement': 180,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a32_4g': {
                'screen_replacement': 200,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a32_5g': {
                'screen_replacement': 180,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a33_5g': {
                'screen_replacement': 240,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
	   'samsung_a34_5g': {
                'screen_replacement': 240,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a40': {
                'screen_replacement': 240,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
	    'samsung_a41': {
                'screen_replacement': 260,
                'battery_replacement': 0,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a42_5g': {
                'screen_replacement': 240,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a50': {
                'screen_replacement': 160,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a50s': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a51_4g': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a51_5g': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a52': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a52s': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a52_5g': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a53_5g': {
                'screen_replacement': 280,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a54_5g': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a70': {
                'screen_replacement': 260,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a71_4g': {
                'screen_replacement': 260,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a71_5g': {
                'screen_replacement': 270,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 0
            },
            'samsung_a72_4g': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
            'samsung_a72_5g': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 50,
                'rear_camera': 60
            },
	    'samsung_a73_5g': {
                'screen_replacement': 250,
                'battery_replacement': 60,
                'charging_port_replacement': 50,
                'charging_port_service': 20,
                'front_camera': 0,
                'rear_camera': 60
            }
        },
        'samsung_note': {
            'samsung_note_8': {
                'screen_replacement': 360,
                'battery_replacement': 50,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 80,
                'back_glass_replacement': 50
            },
            'samsung_note_9': {
                'screen_replacement': 380,
                'battery_replacement': 50,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 90,
                'back_glass_replacement': 50
            },
            'samsung_note_10': {
                'screen_replacement': 390,
                'battery_replacement': 50,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 90,
                'back_glass_replacement': 50
            },
            'samsung_note_10_plus': {
                'screen_replacement': 450,
                'battery_replacement': 50,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 90,
                'back_glass_replacement': 50
            },
            'samsung_note_20': {
                'screen_replacement': 370,
                'battery_replacement': 60,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 90,
                'back_glass_replacement': 60
            },
            'samsung_note_20_ultra': {
                'screen_replacement': 430,
                'battery_replacement': 70,
                'charging_port_replacement': 60,
                'charging_port_service': 20,
                'front_camera': 60,
                'rear_camera': 90,
                'back_glass_replacement': 60
            }
        },
        'pixel': {
            'pixel_3': {
                'screen_replacement': 230,
                'charging_port_service': 20
            },
	    'pixel_3_xl': {
                'screen_replacement': 240,
                'charging_port_service': 20
            },
            'pixel_3a': {
                'screen_replacement': 200,
                'charging_port_service': 20
            },
            'pixel_3a_xl': {
                'screen_replacement': 210,
                'charging_port_service': 20
            },
            'pixel_4': {
                'screen_replacement': 180,
                'charging_port_service': 20
            },
	    'pixel_4_xl': {
                'screen_replacement': 230,
                'charging_port_service': 20
            },
            'pixel_4a': {
                'screen_replacement': 290,
                'charging_port_service': 20
            },
            'pixel_5': {
                'screen_replacement': 360,
                'charging_port_service': 20
            },
	    'pixel_5a': {
                'screen_replacement': 300,
                'charging_port_service': 20
            },
            'pixel_6': {
                'screen_replacement': 320,
                'charging_port_service': 20
            },
            'pixel_6a': {
                'screen_replacement': 350,
                'charging_port_service': 20
            },
	    'pixel_6_pro': {
                'screen_replacement': 270,
                'charging_port_service': 20
            },
            'pixel_7': {
                'screen_replacement': 350,
                'charging_port_service': 20
            },
            'pixel_7a': {
                'screen_replacement': 270,
                'charging_port_service': 20
            },
	   'pixel_7_pro': {
                'screen_replacement': 280,
                'charging_port_service': 20
            },
            'pixel_8': {
                'screen_replacement': 430,
                'charging_port_service': 20
            },
            'pixel_8_pro': {
                'screen_replacement': 450,
                'charging_port_service': 20
            }
        },
        'ipad': {
            'ipad_5': {
                'screen_replacement': 100,
                'lcd_replacement': 150
            },
            'ipad_6': {
                'screen_replacement': 100,
                'lcd_replacement': 150
            },
            'ipad_7': {
                'screen_replacement': 120,
                'lcd_replacement': 160
            },
            'ipad_8': {
                'screen_replacement': 120,
                'lcd_replacement': 170
            },
            'ipad_9': {
                'screen_replacement': 120,
                'lcd_replacement': 170
            },
            'ipad_10': {
                'screen_replacement': 120,
                'lcd_replacement': 250
            }
	},
	'ipad_mini': {
            'mini_4': {
                'lcd_display_replacement': 200
            },
            'mini_5': {
                'lcd_display_replacement': 220
            },
            'mini_6': {
                'lcd_display_replacement': 0
            }
	},
	'ipad_air': {
            'air_2': {
                'lcd_display_replacement': 180
            },
            'air_3': {
                'lcd_display_replacement': 250
            },
            'air_4': {
                'lcd_display_replacement': 260
            },
            'air_5': {
                'lcd_display_replacement': 270
            }
	},
	'ipad_pro': {
            'pro_9.7': {
                'lcd_display_replacement': 240
            },
            'pro_10.5': {
                'lcd_display_replacement': 280
            },
            'pro_11_2018': {
                'lcd_display_replacement': 360
            },
            'pro_11_2020': {
                'lcd_display_replacement': 360
            },
            'pro_11_2021': {
                'lcd_display_replacement': 380
            },
	    'pro_11_2022': {
            	'lcd_display_replacement': 380
            },
            'pro_12.9_2015': {
                'lcd_display_replacement': 370
            },
            'pro_12.9_2018': {
                'lcd_display_replacement': 350
            },
            'pro_12.9_2020': {
                'lcd_display_replacement': 360
            },
            'pro_12.9_2021': {
                'lcd_display_replacement': 400
            },
            'pro_12.9_2022': {
                'lcd_display_replacement': 400
            }
        }
    };

function populateIssues(deviceType) {
        issueSelect.innerHTML = '<option value="">Select an issue...</option>';
        const deviceIssues = issues[deviceType] || [];
        deviceIssues.forEach(issue => {
            const option = document.createElement('option');
            option.value = issue.value;
            option.textContent = issue.label;
            issueSelect.appendChild(option);
        });
    }

    function updateModelOptions(deviceType) {
        modelSelect.innerHTML = '<option value="">Select a model...</option>';
        const deviceModels = Object.keys(prices[deviceType] || {});
        deviceModels.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = formatModelName(model);
            modelSelect.appendChild(option);
        });
    }

    function formatModelName(model) {
        const exceptions = {
            'iphone': 'iPhone',
            'ipad': 'iPad',
            'se': 'SE',
            'xs': 'XS',
            'xr': 'XR',
            'xl': 'XL',
            'fe': 'FE',
            '4g': '4G',
            '5g': '5G'
        };

        const formattedModel = model.replace(/_/g, ' ').replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());

        const words = formattedModel.split(' ');
        for (let i = 0; i < words.length; i++) {
            const word = words[i].toLowerCase();
            if (exceptions[word]) {
                words[i] = exceptions[word];
            }
        }

        return words.join(' ');
    }

    function updatePrice() {
        const selectedDeviceType = deviceTypeSelect.value;
        const selectedModel = modelSelect.value;
        const selectedIssue = issueSelect.value;

        if (selectedDeviceType && selectedModel && selectedIssue) {
        	const price = prices[selectedDeviceType][selectedModel][selectedIssue];
        	priceSpan.textContent = `$${price}`;

        	bookNowContainer.innerHTML = '<p><em>We issue <b>three months warranty*</b> with this repair.</em></p>';
		// Add Book Now button
        	bookNowContainer.innerHTML += '<a href="#book-now" class="book-repair">BOOK REPAIR</a>';
    	} else {
        	priceSpan.textContent = '';
        	bookNowContainer.innerHTML = ''; // Clear the Book Now button
    	}
    }

    deviceTypeSelect.addEventListener('change', () => {
        const selectedDeviceType = deviceTypeSelect.value;
        populateIssues(selectedDeviceType);
        updateModelOptions(selectedDeviceType);
        updatePrice();
    });

    modelSelect.addEventListener('change', updatePrice);
    issueSelect.addEventListener('change', updatePrice);

    // Clear model and issue selects on load
    modelSelect.innerHTML = '<option value="">Select a model...</option>';
    issueSelect.innerHTML = '<option value="">Select an issue...</option>';

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
	menuToggle.classList.toggle('active');
	document.body.classList.toggle('lock-scroll');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
	    menuToggle.classList.remove('active');
	    document.body.classList.remove('lock-scroll');
        });
    });
});
