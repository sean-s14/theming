$(window).on('load', e => {
    // Loading Icon Displays

    $(document).ready(() => {

        const change_theme_btn = $("#change_theme");

        const invert_theme = () => {
            // Matches all elements with an attribute of "class" that contain the string "light"
            const light_themed_el = $("*[class*=light]");
            const dark_themed_el = $("*[class*=dark]");

            const change_classes = (el, current_class, new_class) => {
                // Return string of all classes in element
                let current_el_class = $(el).attr('class');
                
                // Make new string by replacing all instances of 'light/dark' 
                // with 'dark/light' inside "current_el_class"
                let new_el_class = current_el_class.replace(current_class, new_class);

                $(el).removeClass(current_el_class);  // Remove old classes
                $(el).addClass(new_el_class);  // Add new classes
            }

            light_themed_el.each((index, el) => change_classes(el, /light/g, 'dark') );
            dark_themed_el.each((index, el) => change_classes(el, /dark/g, 'light') );
        }

        const change_theme = () => {
            const theme = localStorage.getItem('theme');
        
            if ( theme === 'light' | null) {
                invert_theme();
                localStorage.setItem('theme', 'dark');
            } else if ( theme === 'dark' ) {
                invert_theme();
                localStorage.setItem('theme', 'light');
            }
        }

        const theme_initial_load = () => {
            // If local storage's "theme" is "dark" then invert themes
            const theme = localStorage.getItem('theme');

            theme === 'dark'
                ? invert_theme()
                : null;

            // Hide loading icon
            setTimeout(() => $(".loading-icon").css('display', 'none'), 500);
        }

        theme_initial_load();
        change_theme_btn.on('click', e => change_theme() );
    })
})